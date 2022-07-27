import {useGLTF} from '@react-three/drei';

export function Model(props) {
	const gltf = useGLTF(props.url, '/draco-gltf');
	useGLTF.preload(props.url);
	// TODO con gltf.*  -> animaciones, asset, cameras, parser, userData, scenes (plural)

	return (
		<primitive
			scale={0.05}
			object={gltf.scene}
			dispose={null}
			position={props.position}
			onClick={() => {
				// console.log('SELECCIONASTE MARTES ');
			}}
		/>
	);
}
