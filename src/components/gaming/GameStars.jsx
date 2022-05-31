import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
// Mine
import '../App.css';


const GameStars = () => {

	const ref = useRef();
	const ref2 = useRef();

	useFrame(() => {
		ref.current.rotation.y += 0.001
		ref2.current.rotation.y -= 0.0005
	})


	// TODO WinText component
	return (
		<>
			<Stars
				ref={ref}
				radius={1}
				depth={600}
				count={5000}
				factor={3}
				saturation={0.9}
				fade
				speed={1}
				/** Color of particles (default: 100) */
				// color?: THREE.ColorRepresentation | Float32Array   ->>> https://github.com/pmndrs/drei#stars
				color={3}
			/>
			<Stars
				ref={ref2}
				radius={0.1}
				depth={400}
				count={5000}
				factor={3}
				saturation={0.9}
				fade
				speed={1}
				/** Color of particles (default: 100) */
				// color?: THREE.ColorRepresentation | Float32Array   ->>> https://github.com/pmndrs/drei#stars
				color={3}
			/>
		</>
	);
}

export default GameStars;

