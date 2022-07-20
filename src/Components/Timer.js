import React from 'react'

export default function Timer(props) {
  return (
    
    <h4 className="text-center pt-5" style={props.style} > <span>Timer - </span>
    {(props.time.h > 0) ? props.time.h + ":" : ""}{(props.time.m > 0) ? props.time.m + ":" : ""}{props.time.s}:{props.time.ms}s </h4>
  )
}
