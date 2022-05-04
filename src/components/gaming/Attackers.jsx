import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Attackers = (props) => {
  // const utils = useContext(utilsContext);

  var zMovement = -40;

  const [ref, api] = useBox(() => ({
    mass: 0,
    position: [props.pos.x, props.pos.y, props.pos.z - props.wait],
    type: "Dynamic",
    args: [1, 1, 1],
    collisionFilterGroup: 4,
    // No te va a colisionar, sino que vas a colisionar contra el
    collisionFilterMask: 1,
  }));
  
  if (props.play) {
    useFrame(() => {
      api.position.set(props.pos.x, props.pos.y, (zMovement += 0.1) - props.wait);
    });
    for (let i = 1; i < 12; i++) {
      window.setTimeout(() => {
        zMovement = -50;
        api.position.set(0, 0, -zMovement);
        // 6 segs * i * wait= posicion de cada cubo para hacer que algunos salgan antes que otros
      }, 6 * i * 1000 + props.wait * 100);
    }
  }
  
  
  return (
    <mesh ref={ref} /* position={pos} */ >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default Attackers;