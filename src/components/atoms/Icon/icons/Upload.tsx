
import React from "react"
import IconInterface from './IconInterface'
const Upload = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="upload" style={{fill: fill}} d="M8.646,6.354a.5.5,0,0,1,0-.708l3-3a.5.5,0,0,1,.708,0l3,3a.5.5,0,0,1-.708.708L12.5,4.207V16a.5.5,0,0,1-1,0V4.207L9.354,6.354A.5.5,0,0,1,8.646,6.354ZM18,9.5a.5.5,0,0,0,0,1c1.729,0,2.5.771,2.5,2.5v5c0,1.729-.771,2.5-2.5,2.5H6c-1.729,0-2.5-.771-2.5-2.5V13c0-1.729.771-2.5,2.5-2.5a.5.5,0,0,0,0-1c-2.29,0-3.5,1.21-3.5,3.5v5c0,2.29,1.21,3.5,3.5,3.5H18c2.29,0,3.5-1.21,3.5-3.5V13C21.5,10.71,20.29,9.5,18,9.5Z"/></svg>)
}
export default Upload