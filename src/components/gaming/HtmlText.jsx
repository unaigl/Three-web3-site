import { Html } from "@react-three/drei";
import { Dispatch, SetStateAction } from "react";
import "../App.css";

const HtmlText = (props) => {

  //TODO Se puede hacer MAS FACIL CON NUMEROS, COMO ESTADO-- 0 dar a JUGAR, 1 EN PAUSA (en linea), 2 VICTORIA, 3 GAMEOVER

  return (
    <Html position={[5, 7, 0]} as='p' occlude /* transform={[5, 7, 0]} */ >
      <div className="text-box" /* onPointerEnter={(e)=>{console.log(camera)
      // movementX= 0
      // movementY= 0
      }} */>
        {/* Si play es false y win es false ->hay que darle a Play para jugar. 
              Si play es false y win es true -> Ganaste la partida, volvera al menu de Play en 6 segundos.
              Si play es true -> puedes poner en pasua y al volver darle al play -> se reiniciara el juego */}
        {/* Hay que simplificarlo, ya que no es la forma mas eificente. Se utilizan dos useState */}
        {/* PROBLEMA Al actualizar el valor de createContext, no envia evento a
            los componentes que usan el useContext? SOLUCION useContext? */}
        {!props.play ? (
          !props.win ? (
            <div>
              
              {/* <button
                onClick={() => {
                  console.log("PLAY LUNES");
                  props.setplay(true);
                }}
                className="title"
              >
                | PLAY
              </button> */}
              <p>Click on blue box to shoot.
                The goal is to hit the black box which will be mimicing your
                movements. Hit 3 times to EARN tokens.
              </p>
            </div>
          ) : (
            <div>
              {/* <button
                onClick={() => {
                  console.log("PLAY LUNES");
                  props.setplay(true);
                }}
                className="text-box-win"
              >
                | VICTORY
              </button> */}
              <div className="text-box-win">| VICTORY | <br/>Claim your Tokens</div>
            </div>
          )
        ) : (
          <p >
            | Playing
          </p>
        )}
      </div>
    </Html>
  );
};

export default HtmlText;