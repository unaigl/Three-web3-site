import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { useState } from 'react'

import PropTypes from 'prop-types';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const MenuPause = (props) => {
	const colorMap = useLoader(TextureLoader, '/photos/pause.png')
	const [size, setsize] = useState([1, 1])

	const [ref] = usePlane(() => ({
		position: [-5, 4.5, -5],
		rotation: [90 * (-Math.PI / 2), 90, 0]
	}));

	const playGame = () => {
		props.arePlaying.setplay(false);
		props.counter.setcounter(0)
		setsize([1.5, 1.5])
		setTimeout(() => {
			setsize([1, 1])
		}, 200);
	};

	return (
		<mesh ref={ref} onClick={playGame}>
			<planeGeometry args={size} />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	);
};

MenuPause.propTypes = {
	counter: PropTypes.object.isRequired,
	arePlaying: PropTypes.object.isRequired,
};

export default MenuPause;


