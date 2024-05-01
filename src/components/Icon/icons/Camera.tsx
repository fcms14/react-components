
import React from "react"
import IconInterface from './IconInterface'
const Camera = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="camera" style={{fill: fill}} d="M18,6.5H16.36l-.544-1.632a2,2,0,0,0-1.9-1.368H10.081a2,2,0,0,0-1.9,1.368L7.64,6.5H6C3.71,6.5,2.5,7.71,2.5,10v8c0,2.29,1.21,3.5,3.5,3.5H18c2.29,0,3.5-1.21,3.5-3.5V10C21.5,7.71,20.29,6.5,18,6.5ZM20.5,18c0,1.729-.771,2.5-2.5,2.5H6c-1.729,0-2.5-.771-2.5-2.5V10c0-1.729.771-2.5,2.5-2.5H8a.5.5,0,0,0,.475-.342l.658-1.974a1,1,0,0,1,.948-.684h3.838a1,1,0,0,1,.948.684l.658,1.974A.5.5,0,0,0,16,7.5h2c1.729,0,2.5.771,2.5,2.5ZM12,10.5A3.5,3.5,0,1,0,15.5,14,3.5,3.5,0,0,0,12,10.5Zm0,6A2.5,2.5,0,1,1,14.5,14,2.5,2.5,0,0,1,12,16.5Zm6.25-6a.75.75,0,1,1-.75-.75A.75.75,0,0,1,18.25,10.5Z"/></svg>)
}
export default Camera
