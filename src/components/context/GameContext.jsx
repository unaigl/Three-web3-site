import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Para los hijos
export const utilsGameContext = createContext();

// Para el padre
export const UtilsGameContextProvider = (props) => {
	const childrenArray = React.Children.toArray(props.children);

	const [play, setplay] = useState(false);
	const [win, setwin] = useState(false);
	const [gameover, setgameover] = useState(false);
	const [counter, setcounter] = useState(0);
	const [tokens, settokens] = useState(0);
	// Valores que se usaran en el componente del "PlayerBox, Objetive y CameraRig" para monitorizar movimientos espejo
	const [move, setmove] = useState({
		x: 0,
		y: 0,
		z: 0,
	});

	const gameUtils = {
		arePlaying: { play, setplay },
		hasWin: { win, setwin },
		cameraMovement: { move, setmove },
		gameOver: { gameover, setgameover },
		counter: { counter, setcounter },
		tokens: { tokens, settokens },

	};

	return (
		<utilsGameContext.Provider value={gameUtils}>
			{childrenArray}
		</utilsGameContext.Provider>
	);
};

UtilsGameContextProvider.propTypes = {
	children: PropTypes.node,
};