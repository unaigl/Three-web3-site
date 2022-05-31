import { useFrame, useThree } from '@react-three/fiber';
import React from 'react';
import { Vector3 } from 'three';
import PropTypes from 'prop-types'

// Mine
import '../App.css';



// Funcion que permite mantener la camara constantemente en movimiento (balanceandose)
function CameraRig(props) {
	const vec = new Vector3();
	const { camera, mouse } = useThree();
	useFrame(() => {
		// este vector "vec", en su parametro z es el que hace que la camara este constantemente en el 7.
		camera.position.lerp(vec.set(mouse.x * 3, mouse.y * 3, 7), 0.05);
		props.setmove(camera.position);
	});

	const childrenArray = React.Children.toArray(props.children);
	return <group>{childrenArray}</group>;

}

CameraRig.propTypes = {
	setmove: PropTypes.func.isRequired,
	children: PropTypes.node,
};

export default CameraRig