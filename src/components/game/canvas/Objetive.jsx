import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react'
// import { UtilsGameContext } from "../context/GameContext";


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
		// or using "e.collisionFilters.bodyFilterGroup == 3 " inside if statement
		onCollideBegin: () => {
			if (hasStart) {
				// console.log('win');
				props.setplay(false);
				props.setwin(true);
				props.settokens(true);

				// SET TOKEN, NO FUNCIONA
				// props.setcounter(props.counter + 1)
				// props.tokens.settokens(props.tokens.tokens + 2);

				// FINISH WIN
				setTimeout(() => {
					props.setwin(false);
				}, 1000);

			}
		}

		// onCollide: (e) => {
		// },
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
