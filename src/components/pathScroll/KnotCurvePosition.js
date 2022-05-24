import * as THREE from 'three';

export default function KnotCurvePosition(t, optionalTarget) {
	const point = optionalTarget || new THREE.Vector3();

	t *= 2 * Math.PI;

	const R = 10;
	const s = 50;

	const x = s * Math.sin(t);
	// Para que se quede plano, se queda una geometria que dibuja un infinito
	// var y = Math.cos(t) * (R + s * Math.cos(t));
	const y = 0;
	const z = Math.sin(t) * (R + s * Math.cos(t));

	return point.set(x, y, z);
}
