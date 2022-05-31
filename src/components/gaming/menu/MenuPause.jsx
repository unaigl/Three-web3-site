import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const MenuPause = (props) => {
	const colorMap = useLoader(TextureLoader, '../../../public/photos/pause.png')


	const [ref] = usePlane(() => ({
		position: [-17, 4.5, -5],
		rotation: [90 * (-Math.PI / 2), 90, 0]
	}));

	const playGame = () => {
		props.arePlaying.setplay(false);
		props.counter.setcounter(0)

	};

	return (
		<mesh ref={ref} onClick={playGame}>
			<planeGeometry args={[1, 1]} />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	);
};

MenuPause.propTypes = {
	counter: PropTypes.object.isRequired,
	arePlaying: PropTypes.object.isRequired,
};

export default MenuPause;


