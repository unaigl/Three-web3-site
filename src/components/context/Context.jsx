import { createContext } from "react";
import React from "react";


// Datos
const utils = {
  has: {
    collide: false,
  },
  // cameraPosition: {
  //   x: 20,
  //   y: -20,
  //   z: -70,
  // },
  objetivePosition: {
    x: 0,
    y: 0,
    z: 0, 
    // x: 20,
    // y: -20,
    // z: -70,
  },
  // isGameActive: false,
};


// Para los hijos
export const utilsContext = createContext(utils);


// Para el padre
export const UtilsContextProvider = (props) => {
    
    
  const childrenArray = React.Children.toArray(props.children)
  // const childrenArray = React.Children.map(children, (child, index)=>{
  //     console.log(index)
  //     return child
  //   })
    
  return (
    <utilsContext.Provider value={utils}>
      {childrenArray}
    </utilsContext.Provider>
  );
};
