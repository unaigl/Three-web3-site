import {useGLTF} from '@react-three/drei';

export function ModelChair(url) {
	const gltf = useGLTF(url, '/draco-gltf');
	useGLTF.preload(url);

	return gltf.scene;
}
