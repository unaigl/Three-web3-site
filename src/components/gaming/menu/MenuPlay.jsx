import { usePlane } from '@react-three/cannon';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import PropTypes from 'prop-types'



const MenuPlay = (props) => {

	const colorMap = useLoader(TextureLoader, '/photos/play.png')


	const [ref] = usePlane(() => ({
		position: [-20, 5, -5],
		rotation: [90 * (-Math.PI / 2), 90, 0]
	}));

	const playGame = () => {
		props.arePlaying.setplay(true);
		props.gameOver.setgameover(false);
		props.setWin(false);
	};

	return (
		<mesh ref={ref} onClick={playGame}>
			<planeGeometry args={[1, 1]} />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	);
};

MenuPlay.propTypes = {
	arePlaying: PropTypes.object.isRequired,
	gameOver: PropTypes.object.isRequired,
	setWin: PropTypes.func.isRequired,
};

export default MenuPlay;
