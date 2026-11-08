// Sets: places beyond the scene's main subject that a deck can visit, one at a time (data-set on a stop).
// Changing set is a cut, not a camera flight, unless a portal joins the two sets (the camera flies to a shot on
// one side, the sets swap behind the fade, it flies on from the other) or a turntable holds them back to back.
//
// A set is declared with defineSet (framework/scene/scene.js):
//   { name, build() → { group, parts?: { name: Object3D }, update?(pose, lists), finish?() },
//     pose?: { key: { default, scale?, list? } }, points?: { key: [parent name | null, local point, groups] } }
// pose keys are read from the beat's data-<key> attributes and eased; list keys (list: true) are read as lists.
// points are where leader names hang; their text comes from the deck's leads ({ key: [name, note] }): no
// name, no leader. attach (optional) hangs parts on the scene itself, shown only while its set is on screen.
import * as THREE from "three";
import { leader } from "./labels.js";
import { list } from "../core/stops.js";

const numberOr = (value, fallback) => (value === undefined || value === "" ? fallback : Number(value));

// defs: the sets in build order; use: the names a page visits (only those are built)
// options: { portals: [{ sets: [a, b], shots: [a's shot, b's shot] }], pairs: [{ sets: [a, b], pivot }],
//            leads: { key: name | [name, note] }, attach: { set, build(root) → { parts, update(pose) }, points } }
export function buildSets(defs, use, engineRoot, { portals = [], pairs = [], leads = {}, attach = null } = {}) {
  const group = new THREE.Group();
  group.name = "sets";
  const built = defs.filter((d) => use.includes(d.name)).map((d) => ({ def: d, ...d.build() }));
  const pieces = Object.fromEntries(built.map((b) => [b.def.name, b.group]));

  // Pairs: two rooms back to back on a turntable that pivots on their shared back wall (world z = pivot).
  // Moving between them is no cut: the turntable turns half a circle and the other room takes the first
  // one's place, so each room's shots stay as they are written
  const tables = pairs
    .filter(({ sets: [a, b] }) => pieces[a] && pieces[b])
    .map(({ sets: [a, b], pivot }) => {
      const table = new THREE.Group();
      table.name = `turntable:${a}:${b}`;
      table.position.z = pivot;
      pieces[a].position.z = -pivot;
      pieces[b].position.z = pivot;
      pieces[b].rotation.y = Math.PI;
      group.add(table);
      return { table, a, b };
    });
  Object.entries(pieces).forEach(([name, p]) => {
    p.name = `set:${name}`;
    p.visible = false;
    const t = tables.find((x) => x.a === name || x.b === name);
    (t ? t.table : group).add(p);
  });

  let active = null;
  const hung = attach && pieces[attach.set] ? attach.build(engineRoot) : null;
  addLeaders(built, hung ? attach.points : null, engineRoot, leads);
  built.forEach((b) => b.finish?.());

  // Pose, eased towards the targets a stop or beat sets; lists (rings…) switch at once
  const specs = Object.assign({}, ...built.map((b) => b.def.pose || {}), hung ? attach.pose : {});
  const keys = Object.keys(specs).filter((k) => !specs[k].list);
  const lists = Object.keys(specs).filter((k) => specs[k].list);
  const pose = Object.fromEntries(keys.map((k) => [k, specs[k].default ?? 0]));
  pose.turn = 0;
  const target = { ...pose };
  const shownLists = Object.fromEntries(lists.map((k) => [k, []]));

  return {
    group,
    names: Object.keys(pieces),
    // Which set shows, and which of its parts (data-parts)
    show(name, parts) {
      active = name;
      Object.entries(pieces).forEach(([k, p]) => (p.visible = k === name));
      const t = tables.find((x) => x.a === name || x.b === name);
      if (t) target.turn = name === t.b ? 1 : 0;
      built.forEach((b) => Object.entries(b.parts || {}).forEach(([k, obj]) => (obj.visible = parts.includes(k))));
      if (hung) Object.entries(hung.parts).forEach(([k, obj]) => (obj.visible = name === attach.set && parts.includes(k)));
    },
    // Whether sets a and b share a turntable (a move between them is no cut)
    joined(a, b) {
      return a !== b && pairs.some((p) => p.sets.includes(a) && p.sets.includes(b));
    },
    // The portal between sets a and b, as { out: a's shot, in: b's shot }, or null
    portal(a, b) {
      const p = portals.find((q) => a !== b && q.sets.includes(a) && q.sets.includes(b));
      return p ? { out: p.shots[p.sets.indexOf(a)], in: p.shots[p.sets.indexOf(b)] } : null;
    },
    // The pose a beat asks for: its data-<key> attributes, each set's default where it sets none
    target(shown) {
      lists.forEach((k) => (shownLists[k] = list(shown[k])));
      keys.forEach((k) => {
        const v = numberOr(shown[k], specs[k].default ?? 0);
        if (Number.isFinite(v)) target[k] = v;
      });
    },
    // k: easing fraction for this frame; returns whether anything still moves
    update(k) {
      let moving = false;
      Object.keys(pose).forEach((key) => {
        const d = target[key] - pose[key];
        if (Math.abs(d) < 0.001 * (specs[key]?.scale || 1)) pose[key] = target[key];
        else {
          pose[key] += d * k;
          moving = true;
        }
      });
      built.forEach((b) => b.update?.(pose, shownLists));
      hung?.update?.(pose, shownLists);
      // A turning table shows both its rooms; at rest, only the one on show
      tables.forEach(({ table, a, b }) => {
        table.rotation.y = Math.PI * pose.turn;
        const turning = pose.turn > 0 && pose.turn < 1;
        if (active === a || active === b) {
          pieces[a].visible = active === a || turning;
          pieces[b].visible = active === b || turning;
        }
      });
      return moving;
    },
  };
}

function addLeaders(built, hungPoints, engineRoot, leads) {
  const place = (root, points) =>
    Object.entries(points || {}).forEach(([key, [parent, at, groups]]) => {
      if (!leads[key]) return;
      const [name, note = ""] = [].concat(leads[key]);
      const obj = leader(name, [key, ...groups], "label-set", note, note ? "notes" : "");
      obj.userData.key = key;
      obj.userData.reach = 1.4;
      obj.position.copy(at);
      (parent ? root.getObjectByName(parent) || engineRoot.getObjectByName(parent) || root : root).add(obj);
    });
  built.forEach((b) => place(b.group, b.def.points));
  place(engineRoot, hungPoints);
}
