import {useBox} from '@react-three/cannon';
import {useFrame} from '@react-three/fiber';
import {useContext} from 'react';
// import { UtilsGameContext } from "../context/GameContext";

const BulletBox = (props) => {
	// const utils = useContext(UtilsGameContext);

	const [ref, api] = useBox(() => ({
		mass: 0,
		position: [0, 0, 0],
		type: 'Dynamic',
		args: [2, 2, 2],
		// 1 PlayerBox 2 Objetive 3 BulletBox 4 Attackers
		collisionFilterGroup: 3,
		// No te va a colisionar, sino que vas a colisionar contra el
		collisionFilterMask: 2,
		// isTrigger: true
	}));

	const defaultColor = 'blue';
	// if(api.isTrigger) return defaultColor= "orange"

	let isShoot = false;
	let increase = 1.3;

	useFrame(() => {
		api.rotation.set(0 + 0.005, 0 + 0.01, 0);
		if (isShoot) {
			increase = increase * 1.1;
			api.position.set(0, 0, 0 - 0.0005 * increase);
		}
	});

	const shootBox = (props) => {
		if (props.play) {
			isShoot = true;
			window.setTimeout(() => {
				isShoot = false;
				increase = 1.3;
				api.position.set(0, 0, 0);
				props.collide = false;
			}, 2000);
		}
	};

	return (
		<mesh ref={ref} onClick={shootBox}>
			<boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
			<meshStandardMaterial color={defaultColor} />
		</mesh>
	);
};

export default BulletBox;
