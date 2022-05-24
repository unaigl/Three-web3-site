import React, {createContext} from 'react';

// Para los hijos
export const utilsGameContext = createContext();

// Para el padre
export const UtilsGameContextProvider = (props) => {
	const childrenArray = React.Children.toArray(props.children);

	const utils = {
		has: {
			collide: false,
		},
		objetivePosition: {
			x: 0,
			y: 0,
			z: 0,
		},
	};

	return (
		<utilsGameContext.Provider value={utils}>
			{childrenArray}
		</utilsGameContext.Provider>
	);
};
