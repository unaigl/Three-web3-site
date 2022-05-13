import * as THREE from 'three'

export default function KnotCurvePosition(t, optionalTarget) {

    var point = optionalTarget || new THREE.Vector3();

    t *= 2 * Math.PI;

    var R = 10;
    var s = 50;

    var x = s * Math.sin(t);
    // Para que se quede plano, se queda una geometria que dibuja un infinito
    // var y = Math.cos(t) * (R + s * Math.cos(t));
    var y = 0;
    var z = Math.sin(t) * (R + s * Math.cos(t));

    return point.set(x, y, z);;

}