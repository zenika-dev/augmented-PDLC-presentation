// Scene maths shared by every deck. Angles are degrees clockwise from the top (north = -z) as seen from above.
import * as THREE from "three";

export const RAD = Math.PI / 180;

// Point on the horizontal plane at height y
export function polar(r, angle, y = 0) {
  return new THREE.Vector3(r * Math.sin(angle * RAD), y, -r * Math.cos(angle * RAD));
}

// Extrude a flat shape downward from y = 0, with a small machined chamfer on the top edges
export function extrude(shape, depth, chamfer = 0.025) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: depth - 2 * chamfer,
    bevelEnabled: chamfer > 0,
    bevelThickness: chamfer,
    bevelSize: chamfer,
    bevelOffset: -chamfer,
    bevelSegments: 1,
    curveSegments: 48,
  });
  geo.rotateX(Math.PI / 2);
  geo.translate(0, -chamfer, 0);
  return geo;
}
