# The engine's attributes

What the PDLC scene adds to stops and beats, on top of the core's (`framework/docs/contract.md`). Generated from `src/schema.js`, `src/shots.js` and `src/engine/sets.js` by `npm run docs`: edit those, not this table. "Beat": whether a beat may set it.

<!-- generated: attributes -->
| Attribute | Beat | Meaning |
|---|---|---|
| `data-explode` |  | 0–1: the bands pulled apart |
| `data-telescope` | yes | 0–1: the Nexus tubes raised (a beat may set it) |
| `data-split` |  | band id: that band lifted out of the stack |
| `data-pulse-band` | yes | band id: the energy wave lights only that band's height |
| `data-idea` |  | phase id \| shape name \| angle \| run (travels its track) \| drop: where the Idea goes |
| `data-idle` |  | flag: the wheel and core turn slowly |
| `data-parts` |  | which parts are in place: wheel, nexus, bands (none: no engine); on a set, its parts |
| `data-separate` | yes | rocket set, 0–1: the stages apart |
| `data-open` | yes | rocket set, 0–1: the fuselage open |
| `data-score` | yes | contract set, 0–100: the needle |
| `data-rule` | yes | contract set, 0–100: the rule ring |
| `data-ceiling` | yes | contract set, 0–100: the ceiling |
| `data-rings` | yes | contract set: the rings on show |
| `data-select` | yes | rocket set: the model bay's selected slot |

Shots (`data-shot`): `hero`, `hero-right`, `top-right`, `nexus`, `nexus-right`, `top-wide`, `nexus-top`, `telescope`, `telescope-left`, `side`, `exploded`, `exploded-left`, `pad`, `rocket-flight`, `rocket-hero`, `rocket-nose`, `rocket-open`, `rocket-moon`, `capability`, `model-bay`, `nose-window`, `cockpit-hatch`, `cockpit`, `cockpit-panel`, `classroom`, `mission`, `telescope-right`, `mission-console`, `mission-wall`, `contract`; kinds: `phase:<id>`, `band:<id>`, `band-high:<id>`, `spine`.

Sets (`data-set`): `rocket`, `cockpit`, `classroom`, `mission`, `contract`.
<!-- /generated -->

Card anchors (`data-anchor`): `phase:<id>`, `band:<id>`, `spine`, `rim:<angle>`, `nexus`, `screen`.
