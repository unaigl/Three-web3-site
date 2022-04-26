import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useContext } from "react";
import { utilsContext } from "../context/Context";
import { Html } from "@react-three/drei";


const MenuPlay = (props) => {
  const utils = useContext(utilsContext);

  const [ref, api] = useBox(() => ({
    mass: 0,
    position: [-6, 5, 0],
    type: "Dynamic",
    args: [0.5, 0.5, 0.5],
    collisionFilterGroup: 3,
    // No te va a colisionar, sino que vas a colisionar contra el
    collisionFilterMask: 2,
    // isTrigger: true
  }));
  
  var defaultColor = "yellow";
  // if(api.isTrigger) return defaultColor= "orange"
  
  var isShoot = false;
  var increase = 1.3;

  useFrame(() => {
    api.rotation.set(0 + 0.005, 0 + 0.01, 0);
    if (isShoot) {
      increase = increase * 1.1;
      api.position.set(0, 0, 0 - 0.0005 * increase);
    }
  });

  const playGame = (e) => {
    props.setplay(true)
  };

  return (
    <mesh ref={ref} onClick={playGame}>
      <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={defaultColor} />
    </mesh>
  );
};

export default MenuPlay;