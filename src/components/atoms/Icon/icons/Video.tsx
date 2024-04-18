
import React from "react"
import IconInterface from './IconInterface'
const Video = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="video" style={{fill: fill}} d="M21.792,6.434a1.241,1.241,0,0,0-1.323.15L17.5,8.959V8c0-2.29-1.21-3.5-3.5-3.5H5C2.71,4.5,1.5,5.71,1.5,8v8c0,2.29,1.21,3.5,3.5,3.5h9c2.29,0,3.5-1.21,3.5-3.5v-.959l2.969,2.375a1.25,1.25,0,0,0,2.031-.977V7.561A1.24,1.24,0,0,0,21.792,6.434ZM16.5,16c0,1.729-.771,2.5-2.5,2.5H5c-1.729,0-2.5-.771-2.5-2.5V8c0-1.729.771-2.5,2.5-2.5h9c1.729,0,2.5.771,2.5,2.5Zm5,.439a.25.25,0,0,1-.406.2L17.5,13.759V10.241l3.594-2.876a.245.245,0,0,1,.264-.03.242.242,0,0,1,.142.226Z"/></svg>)
}
export default Video
