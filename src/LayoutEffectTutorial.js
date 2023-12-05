// import { useLayoutEffect, useEffect, useRef } from "react";

// function LayoutEffectTutorial() {
//   const inputRef = useRef(null);

//   useLayoutEffect(() => {
//     console.log(inputRef.current.value);
//   }, []);

//   useEffect(() => {
//     inputRef.current.value = "HELLO";
//   }, []);

//   return (
//     <div className="App">
//       <input ref={inputRef} value="Hamza" style={{ width: 400, height: 60 }} />
//     </div>
//   );
// }

// export default LayoutEffectTutorial;
import React from 'react'
function Button(){
  return (<button>useless</button>)
}
const LayoutEffectTutorial = () => {
  return (
    <div><Button/></div>
  )
}

export default LayoutEffectTutorial