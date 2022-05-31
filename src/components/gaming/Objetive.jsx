import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
// import { UtilsGameContext } from "../context/GameContext";

const Objetive = (props) => {
	// const utils = useContext(UtilsGameContext);


	let hasStart = false;
	let hasCount = true;

	const [ref, api] = useBox(() => ({
		mass: 0,
		type: 'Dynamic',
		args: [2, 2, 2],
		// 1 PlayerBox 2 Objetive 3 BulletBox 4 Attackers
		collisionFilterGroup: 2,
		collisionFilterMask: 3,
		// or using "e.collisionFilters.bodyFilterGroup == 3 " inside if statement
		onCollide: (e) => {

			if (hasStart && hasCount) {
				console.log('hit');
				hasCount = false;
				// para que solo cuente 1 golpe cada 2 segundos (ya que onCollide pega cuando entra y sale)
				setTimeout(() => {
					hasCount = true;
					// const co = props.counter.counter
					props.counter.setcounter((co) => co + 1)
				}, 2000);
				if (props.counter.counter >= 1) {

					console.log('win');
					// Si se gana, se hace un scroll hacia abajo automaticamente y con el sigueinte setTimeout se vuelve arriba
					window.scrollTo(0, 0.7 * window.innerHeight);
					props.setwin(true);
					props.setplay(false);
					props.tokens.settokens(() => props.tokens.tokens + 3);

					// setTimeout(() => {
					// 	props.setwin(false);
					// }, 5000);
				}
			}
		},
	}));

	// para evitar las collisiones que se generan al cargar
	setTimeout(() => {
		hasStart = true;
	}, 2000);

	// Simula el movimiento de la camara-player
	useFrame(() => {
		api.position.set(props.move.x, props.move.y, props.move.z - 60);
	});

	return (
		<mesh ref={ref}>
			<boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
			<meshStandardMaterial color='white' />
		</mesh>
	);
};

Objetive.propTypes = {
	setwin: PropTypes.func.isRequired,
	setplay: PropTypes.func.isRequired,
	move: PropTypes.object,
	counter: PropTypes.object,
};

export default Objetive;
