import * as THREE from "three";

THREE.Curves = function () {
  function KnotCurve() {
    THREE.Curve.call(this);
  }

  KnotCurve.prototype = Object.create(THREE.Curve.prototype);
  KnotCurve.prototype.constructor = KnotCurve;

  KnotCurve.prototype.getPoint = function (t, optionalTarget) {
    var point = optionalTarget || new THREE.Vector3();

    t *= 2 * Math.PI;

    var R = 10;
    var s = 50;

    var x = s * Math.sin(t);
    var y = Math.cos(t) * (R + s * Math.cos(t));
    var z = Math.sin(t) * (R + s * Math.cos(t));

    return point.set(x, y, z);
  };
};

