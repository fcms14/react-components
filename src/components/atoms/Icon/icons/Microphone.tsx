
import React from "react"
import IconInterface from './IconInterface'
const Microphone = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="microphone" style={{fill: fill}} d="M12.5,18.475V21a.5.5,0,0,1-1,0V18.475A7.5,7.5,0,0,1,4.5,11a.5.5,0,0,1,1,0,6.5,6.5,0,0,0,13,0,.5.5,0,0,1,1,0A7.5,7.5,0,0,1,12.5,18.475ZM7.5,11V7a4.5,4.5,0,0,1,9,0v4a4.5,4.5,0,0,1-9,0Zm1,0a3.5,3.5,0,0,0,7,0V7a3.5,3.5,0,0,0-7,0Z"/></svg>)
}
export default Microphone