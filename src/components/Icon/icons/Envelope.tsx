
import React from "react"
import IconInterface from './IconInterface'
const Envelope = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="envelope" style={{fill: fill}} d="M18,4.5H6C3.71,4.5,2.5,5.71,2.5,8v9c0,2.29,1.21,3.5,3.5,3.5H18c2.29,0,3.5-1.21,3.5-3.5V8C21.5,5.71,20.29,4.5,18,4.5ZM20.5,17c0,1.729-.771,2.5-2.5,2.5H6c-1.729,0-2.5-.771-2.5-2.5V8c0-1.729.771-2.5,2.5-2.5H18c1.729,0,2.5.771,2.5,2.5ZM17.9,8.706a.5.5,0,0,1-.11.7l-4.912,3.573a1.495,1.495,0,0,1-1.764,0L6.206,9.4A.5.5,0,0,1,6.794,8.6l4.912,3.572a.5.5,0,0,0,.588,0L17.206,8.6A.5.5,0,0,1,17.9,8.706Z"/></svg>)
}
export default Envelope
