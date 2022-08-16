import { useBox, } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types'

const PlayerBox = (props) => {

	const [ref, api] = useBox(() => ({
		mass: 0,
		type: 'Dynamic',
		// position: [0, 0, 0],
		args: [1, 1, 1],
		collisionFilterGroup: 1,
		// 1 PlayerBox 2 Objetive 3 BulletBox 4 Attackers
		collisionFilterMask: 4,
		onCollide: () => {
			props.gameover.setgameover(true)
			props.setplay(false);
			setTimeout(() => {
				props.gameover.setgameover(false)
			}, 1000);

		},
	}));

	// Tambien simula el movimiento de la camara (y por lo tanto el del objetivo)
	useFrame(() => {
		api.position.set(props.move.x, props.move.y, props.move.z);
	});

	return (
		<>
			<mesh ref={ref}>
				<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			</mesh>
		</>
	);
};

PlayerBox.propTypes = {
	move: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number,
		z: PropTypes.number,
	}),
	setplay: PropTypes.func,
};

PlayerBox.propTypes = {
	gameover: PropTypes.shape({
		gameover: PropTypes.bool,
		setgameover: PropTypes.func,
	}),
	setplay: PropTypes.func,
};

export default PlayerBox;
