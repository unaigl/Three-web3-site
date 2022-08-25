import { useSphere } from '@react-three/cannon';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import PropTypes from 'prop-types';
import { useState } from 'react'

// import { UtilsGameContext } from "../context/GameContext";

const BulletBox = (props) => {
	// const utils = useContext(UtilsGameContext);
	const [size, setsize] = useState(1)
	const colorMap = useLoader(TextureLoader, '/photos/00.png')

	const [ref, api] = useSphere(() => ({
		mass: 0,
		position: [0, 0, 0],
		type: 'Dynamic',
		// 1 PlayerBox 2 Objetive 3 BulletBox 4 Attackers
		collisionFilterGroup: 3,
		// No te va a colisionar, sino que vas a colisionar contra el
		collisionFilterMask: 2,
		isTrigger: true
	}));


	let isShoot = false;
	let increase = 1.08;

	useFrame(() => {
		api.rotation.set(0 + 0.005, 0 + 0.01, 0);
		if (isShoot) {
			increase = increase * 1.1;
			api.position.set(0, 0, 0 - 0.0005 * increase);
		}
	});

	const shootBox = () => {
		if (props.play) {
			isShoot = true;
			window.setTimeout(() => {
				isShoot = false;
				increase = 1.05;
				api.position.set(0, 0, 0);
			}, 2500);
		}
	};

	const SetBigger = () => {
		if (!props.play) setsize(1.1)
	}

	return (
		<mesh ref={ref} onClick={shootBox} onPointerEnter={SetBigger} onPointerOut={() => setsize(1)} >
			<sphereGeometry attach='geometry' args={[size, 32, 32]} />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	);
};

BulletBox.propTypes = {
	play: PropTypes.bool,
};

export default BulletBox;
