import { useBox } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import KnotCurvePosition from './KnotCurvePosition' 
import * as THREE from 'three'

const MiddleBox = (props) => {

    const [ref, api] = useBox(() => ({
        mass: 0,
        type: "Dynamic",
        args: [2, 2, 2],
    }));

    // api.position.set(Vector3)
    // Si restamos a 0,0,0 las coordenadas del punto P, conseguimos el vector PO. Si lo multiplicamos por < 1 conseguimos acercarlo al 0,0,0.
    api.position.set(props.po[0] * 0.8, props.po[1], props.po[2] * 0.8)
    // Si queremos seguir desarrollandolo podemos calcular los dos centros -> calcular cual es el centro mas cercano de cada cubo y alejarlo respecto a el.

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial />
        </mesh>
    );
};
    
    export default MiddleBox;