import React, {  useState } from "react";
import Header from "./Components/Header";
import Board from "./Components/Board";
import Timer from "./Components/Timer";
import Functionality from "./Components/Functionality";
import {exist  , setValue , winner } from "./handler"
import celebration from  "./assets/celebration.jpg"
import BestTime from "./Components/BestTime";

function App() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
  const [randomChar, setrandomChar] = useState("")
  const [count , setCount]=useState(1);
  const [interv , setInterv]=useState()
  const [bVisible, setBVisible] = useState(true)
  const [img , setImg]=useState(false)

  const allChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


  const color = {
    backgroundColor: '#071359',
    position: "fixed",
    width: "100%",
    height: "100%",
  }
  const white = { color: "white" }
  const size = { width: "450px", height: "150px", backgroundColor: "#e1e2e6" ,backgroundImage: img ?`url(${celebration})`:"none" }

  var updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const start = () => {
    setBVisible(false)
  
    setrandomChar(allChar[parseInt(Math.random() * (26 - 0) + 0)])
    run()
    setInterv(setInterval(run, 10))
  }
  const check=(e)=>{
    if(count<20 ){
    const last = e.target.value.charAt(e.target.value.length - 1);
    if(randomChar===last){
      let newrandom=allChar[parseInt(Math.random() * (26 - 0) + 0)]
      if(randomChar===newrandom){
        let latestrandom=allChar[parseInt(Math.random() * (26 - 0) + 0)]
        if(randomChar===latestrandom){
      setrandomChar(allChar[parseInt(Math.random() * (26 - 0) + 0)])
        }
        else{
          setrandomChar(latestrandom)
        }
      }else{
        setrandomChar(newrandom)
      }
      setCount(count+1);
    }
    else{

      clearInterval(interv)
        if(updateMs<50){
          updateMs=updateMs+50
       setTime({ ms:updateMs, s: updateS, m: updateM, h: updateH })
        }
        else{
          let newms=updateMs-50
          updateMs=newms
          updateS=updateS+1
          setTime({ ms:updateMs, s: updateS, m:updateM, h:updateH})
      }    
      setInterv(setInterval(run, 10))
    
    }    

  }
  else{
    clearInterval(interv)

    if(exist()){
     if(winner(time)){
      setImg(true)
      setrandomChar("Success")
      setValue(time)
     }else{
      setrandomChar("Failure")
     }
    }else{
      setrandomChar("Success")
      setImg(true)
      setValue(time)
    }
  }
  }



  const run = () => {
    if (updateM === 60) {
      updateH++
      updateM = 0
    }
    if (updateS === 60) {
      updateM++
      updateS = 0
    }
    if (updateMs === 100) {
      updateS++
      updateMs = 0
    }
  
    updateMs++
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH })

  }

  const reset=()=>{
    setBVisible(true)
    clearInterval(interv)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
    setCount(1);
    setrandomChar("")
    setImg(false)

  }

  return (
    <div style={color} >
      <div className="container">
        <div className="row justify-content-center text-center">
          <Header style={white} />
          <Board style={size} randomValue={randomChar} />
          <Timer style={white} time={time} />
          <Functionality bVisible={bVisible}  start={start} reset={reset} check={check}/>
          <BestTime style={white} />
        </div>
      </div>
    </div>
  );
}

export default App;
