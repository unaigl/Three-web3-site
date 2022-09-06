import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import propTypes from 'prop-types';

const Objetive = (props) => {

	let hasStart = false
	const secondsToStart = 3 * 1000

	const [ref, api] = useBox(() => ({
		mass: 0,
		type: 'Dynamic',
		args: [3, 3, 3],
		// 1 PlayerBox 2 Objetive 3 BulletBox 4 Attackers
		collisionFilterGroup: 2,
		collisionFilterMask: 3,
		onCollideBegin: () => {
			if (hasStart) {
				props.setplay(false);
				props.setwin(true);
				props.settokens(true);
				setTimeout(() => {
					props.setwin(false);
				}, 1000);

			}
		}
	}));

	// para evitar las collisiones que se generan al cargar
	setTimeout(() => {
		hasStart = true;
	}, secondsToStart);

	// Simula el movimiento de la camara-player
	useFrame(() => {
		api.position.set(props.move.x, props.move.y, props.move.z - 60);
	});

	return (
		<mesh ref={ref} >
			<boxBufferGeometry attach='geometry' args={[3, 3, 3]} />
			<meshStandardMaterial color='white' />
		</mesh>
	);
};

Objetive.propTypes = {
	setcounter: propTypes.func,
	setwin: propTypes.func,
	setplay: propTypes.func,
	tokens: propTypes.object,
	move: propTypes.object,
	counter: propTypes.number,
	settokens: propTypes.func,


};

export default Objetive;
