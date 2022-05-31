import React, { createContext, useState } from 'react';

import * as THREE from 'three';

// Para los hijos
export const utilsContext = createContext({
	// Se puede agregar defaultValues
});

// Para el padre
export const UtilsContextProvider = (props) => {
	// const defaultRotation = new THREE.Euler(0, 0, 0)

	const [isRotationEnable, setisRotationEnable] = useState(false);
	const [cameraRotation, setcameraRotation] = useState(false);
	const [isLightSky, setisLightSky] = useState(true);

	const childrenArray = React.Children.toArray(props.children);

	const utils = {
		rotationEnable: { isRotationEnable, setisRotationEnable },
		setRotation: { cameraRotation, setcameraRotation },
		light: { isLightSky, setisLightSky },
	};

	return (
		<utilsContext.Provider value={utils}>
			{childrenArray}
		</utilsContext.Provider>
	);
};
