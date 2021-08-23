import "./App.css";
import Profile from "./Profile";
import React, { useState, useEffect } from "react";


const App = () => {
  const inshow = false;
  const [show, setShow] = useState(inshow);
  const showFunction = () => {
    setShow((prevShow) => !prevShow);
  };

  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);


  return (
    <div className="App">
       <button onClick={ () => {showFunction()}} > {show === true ? "Hide Profile" : "Show Profile"}</button>
       <div> { (show === true)?
       <div>
       <div className="clock">
       {count} 
       </div>
       <Profile
                fullName='Smoky The Great'
                bio='what ever'
                img='./cat_dev.jpg'
                profession='Computer Stuff'
      />
        </div>: null }
        </div>
    </div>
  )}
export default App;




