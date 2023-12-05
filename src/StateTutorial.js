//in react ,useState ,a s well as any other 
//function starting with "use" is called hook
//hooks are special functions that are only
//available while React is rendering.
//they let you "hook into" different React features
//use sate is a hook so u can only callit
//at the top level of your component or 
//your own hook.
//you cant call it inside loops or conditions

import React,{useState} from "react";
import LayoutEffectTutorial from "./LayoutEffectTutorial";
//in order to show our work on the browser we need to
//to import the hook that we used
// const btn=()=>{
//     return(
//         <Button/>
//     )
// }
const StateTutorial = () =>{
    //practice one for useState hook
    //syntax for the useState hook
    // const [counter, setCounter] = useState(0)

    // const increment = () =>{
    //     //counter = counter+ 1;
    //     //instead of that we will use the function setCounter
    //     //to mutate it
    //     setCounter(counter + 1);
    // }
    // return (
    // <div>
    //     {counter}<button onClick={increment}>increment</button>
    //     </div>
    //     );

    //practice 2 for use State hook
    const  [inputValue,setInputValue ] = useState("Hamza");
    let onChange = (event) =>{
        const newValue = event.target.value;
        setInputValue(newValue);
    };
    return (
        <div>
            
            <input placeholder="Enter something..." onChange={onChange}/>
            {inputValue}
        </div>
        

    );
         

};
export default StateTutorial;

