import {useBox} from '@react-three/cannon';

const MenuPause = (props) => {
	const [ref, api] = useBox(() => ({
		mass: 0,
		position: [-5, 5, 0],
		type: 'Dynamic',
		args: [0.5, 0.5, 0.5],
	}));

	const defaultColor = 'orange';

	const playGame = (e) => {
		props.setplay(false);
		// api.args[3, 3, 3]
	};

	return (
		<mesh ref={ref} onClick={playGame}>
			<boxBufferGeometry attach='geometry' args={[0.5, 0.5, 0.5]} />
			<meshStandardMaterial color={defaultColor} />
		</mesh>
	);
};

export default MenuPause;
