import "./App.css";
import React,{useState} from "react";

const App = ()=> {
  // the code below will create an counter 
  //which can be incremented using useState 
  //hook
  //example 1
  //defining our state
      // const [counter,setCounter] = useState(0);
      // const increment = () =>{
      //   setCounter(counter+1);
      // };
      // return <div className="but">
      //   {counter}<button onClick={increment}>Increment</button>
      // </div>

  //example 2
    const [inputValue,setInputValue] = useState["Hamza"];
    let onChange = (event) =>{
      const newValue = event.target.value;
      setInputValue(newValue);
    } ;
    return(
      <div>
        <input placeholder="enter name.." onChange={onChange}/>
        {inputValue}
      </div>
    ) ;  
  };

export default App;
