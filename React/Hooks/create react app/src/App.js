// import { useEffect, useState } from "react";
import "./App.css";
import Counter from './Counter'

function App() {

  // const [show, setShow] = useState(true)
  // let time = 0;

  // useEffect(()=>{
  //   let timer = setInterval(()=>{
  //     time++
  //     console.log(time)
  //     if(time > 5){
  //       clearInterval(timer)
  //       setShow(false)
  //     }
  //   },1000)
  // },[])
  // if(show){
  //   return (
  //     <>
  //     <Counter count={4}></Counter>
  //     </>
  //   );
  // }else{
  //   return(
  //   <div>
  //     Sem contador.
  //   </div>)
  // }



return (
  <>
  <Counter count={4}></Counter>
  </>
);
}

export default App;

