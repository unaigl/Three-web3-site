import {useBox} from '@react-three/cannon';
import {useFrame} from '@react-three/fiber';
import {Dispatch, SetStateAction, useContext} from 'react';
// import { UtilsGameContext } from "../context/GameContext";

const Objetive = (props) => {
	// const utils = useContext(UtilsGameContext);

	let counter = 0;
	let hasStart = false;
	let hasCount = true;

	const [ref, api] = useBox((props) => ({
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
				counter++;
				// para que solo cuente 1 golpe cada 2 segundos (ya que onCollide pega cuando entra y sale)
				setTimeout(() => {
					hasCount = true;
				}, 2000);
				if (counter >= 1) {
					console.log('win');
					props.setwin(true);
					props.setplay(false);

					setTimeout(() => {
						props.setwin(false);
					}, 6000);
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
			<meshStandardMaterial color='black' />
		</mesh>
	);
};

export default Objetive;
