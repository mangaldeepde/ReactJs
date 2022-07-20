import React, {useRef, useEffect } from 'react'


const Functionality= (props , ref) =>{

  const iElement=useRef(null)
 useEffect(()=>{
  if(!props.bVisible){
  iElement.current.focus()
  }
 },[props.bVisible])
  return (
    <React.Fragment>
    <div>
    {props.bVisible && <button type="button"  style={{ backgroundColor: "#f74361", border: "solid 1px #f74361", width: "100px" }} onClick={props.start} className="btn btn-primary">Start</button>}
  </div>
  {
    !props.bVisible && (<div className="input-group mb-3 pt-2" style={{width:"400px"}}>
      <input type="text" className="form-control" placeholder="Enter Character" ref={iElement} onChange={props.check}  aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button className="btn btn-outline-secondary" type="button" style={{ backgroundColor: "#f74361", border: "solid 1px #f74361",color:"white"}} onClick={props.reset} id="button-addon2">Reset</button>
    </div>)
  }
  </React.Fragment>
  )
}

export default Functionality
