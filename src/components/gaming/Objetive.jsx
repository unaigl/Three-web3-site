import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Dispatch, SetStateAction, useContext } from "react";
import { utilsContext } from "../context/Context";

const Objetive = ( props ) => {
  const utils = useContext(utilsContext);

  var counter = 0;
  var hasStart = false;
  var hasCount = true;

  const [ref, api] = useBox(() => ({
    mass: 0,
    type: "Dynamic",
    args: [2, 2, 2],
    collisionFilterGroup: 2,
    onCollide: (e) => {
      if (e.collisionFilters.bodyFilterGroup == 3 && hasStart && hasCount) {
        console.log("hit");
        hasCount = false;
        counter++;
        // para que solo cuente 1 golpe cada 2 segundos (ya que onCollide pega cuando entra y sale)
        setTimeout(() => {
          hasCount = true;
        }, 2000);
        if (counter >= 1) {
          console.log("win");
          props.setwin(true);
          props.setplay(false);

          setTimeout(() => {
            props.setwin(false);
          }, 6000);
        }
      }
    },
  }));

  // para evitar las collisiones que se generan al cargar
  setTimeout(() => {
    hasStart = true;
  }, 2000);

  // Simula el movimiento de la camara-player
  useFrame(() => {
    api.position.set(
      utils.objetivePosition.x,
      utils.objetivePosition.y,
      utils.objetivePosition.z - 60
    );
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]}>
      </boxBufferGeometry>
      <meshStandardMaterial color={"black"} />
    </mesh>
  );
};

export default Objetive;