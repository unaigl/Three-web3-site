import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';



const MenuPlay = (props) => {

	const colorMap = useLoader(TextureLoader, '/photos/play.png')

	const [size, setsize] = useState([1, 1])

	const [ref] = usePlane(() => ({
		position: [-1, 9, -5],
		rotation: [0, 0, 45]
	}));

	const playGame = () => {
		props.arePlaying.setplay(true);
		props.gameover.setgameover(false);
		props.setwin(false);
		// window.scrollTo(0, 0.15 * window.innerHeight);
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

MenuPlay.propTypes = {
	arePlaying: PropTypes.object.isRequired,
	gameover: PropTypes.object.isRequired,
	setwin: PropTypes.func.isRequired,
};

export default MenuPlay;
