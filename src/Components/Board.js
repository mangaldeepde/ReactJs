import React from 'react'

export default function Board(props) {
  return (
    <React.Fragment>
        <div className="border rounded p-2 " style={props.style}>
            <h1 style={{ color: "#008a3c", fontSize: "100px" }}>{props.randomValue}</h1>
          </div>
    </React.Fragment>
  )
}
