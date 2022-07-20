import React from 'react'
import {exist , getValue} from "../handler"


export default function BestTime(props) {
  return (
    <React.Fragment>
    {exist()?<p style={props.style} className="pt-3">my best time:{getValue().h>0?getValue().h+":":""}{getValue().h>0?getValue().m+":":""} {getValue().s>0?getValue().s+":":""}{getValue().ms}</p>:""}
    </React.Fragment>
  )
}
