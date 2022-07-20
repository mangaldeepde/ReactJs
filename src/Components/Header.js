import React from 'react'

const Header =(props)=> {
  return (
    <React.Fragment>
        <div >
            <h1 style={props.style} className="p-5">Type the Alphabate</h1>
          </div>
          <h3 style={props.style} className="text-center pb-3">typing game to see how fast you can type. timer start when you :)</h3>
    </React.Fragment>
  )
}

export default React.memo(Header)

