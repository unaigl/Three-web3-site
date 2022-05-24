import {useBox} from '@react-three/cannon';
import {useFrame} from '@react-three/fiber';
import {Dispatch, SetStateAction, useContext} from 'react';
// import { UtilsGameContext } from "../context/GameContext";

const PlayerBox = (props) => {
	// const utils = useContext(UtilsGameContext);

	// let scores: (string | number)[];
	// scores = [ref, api];

	// var ref = useRef<MutableRefObject<RefObject<Object3D<Event>> | undefined>>();
	// var api = useRef<MutableRefObject<PublicApi | undefined>>();

	const [ref, api] = useBox(() => ({
		mass: 0,
		type: 'Dynamic',
		// position: [0, 0, 0],
		args: [2, 2, 2],
		collisionFilterGroup: 1,
		// 1 PlayerBox 2 Objetive 3 BulletBox 4 Attackers
		collisionFilterMask: 4,
		onCollide: (e) => {
			// if (e.collisionFilters.bodyFilterGroup == 4)
			console.log('GAME OVER');
			props.setplay(false);
			// hasCollide
		},
	}));

	// Tambien simula el movimiento de la camara (y por lo tnato el del objetivo), para poder tener un collider para el game over
	useFrame(() => {
		api.position.set(props.move.x, props.move.y, props.move.z);
	});

	return (
		<mesh ref={ref}>
			<boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
			<meshStandardMaterial />
		</mesh>
	);
};

export default PlayerBox;
