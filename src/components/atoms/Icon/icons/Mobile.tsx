
import React from "react"
import IconInterface from './IconInterface'
const Mobile = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="mobile" style={{fill: fill}} d="M16,2.5H8C5.71,2.5,4.5,3.71,4.5,6V18c0,2.29,1.21,3.5,3.5,3.5h8c2.29,0,3.5-1.21,3.5-3.5V6C19.5,3.71,18.29,2.5,16,2.5ZM18.5,18c0,1.729-.771,2.5-2.5,2.5H8c-1.729,0-2.5-.771-2.5-2.5V6c0-1.729.771-2.5,2.5-2.5h8c1.729,0,2.5.771,2.5,2.5ZM14,6a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1,0-1h3A.5.5,0,0,1,14,6ZM12.75,18a.75.75,0,1,1-.75-.75A.75.75,0,0,1,12.75,18Z"/></svg>)
}
export default Mobile
