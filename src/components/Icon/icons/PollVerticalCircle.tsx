
import React from "react"
import IconInterface from './IconInterface'
const PollVerticalCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="poll-vertical-circle" style={{fill: fill}} d="M8.5,11v5a.5.5,0,0,1-1,0V11a.5.5,0,0,1,1,0ZM12,7.5a.5.5,0,0,0-.5.5v8a.5.5,0,0,0,1,0V8A.5.5,0,0,0,12,7.5Zm4,5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,1,0V13A.5.5,0,0,0,16,12.5Zm6.5-.5A10.5,10.5,0,1,1,12,1.5,10.512,10.512,0,0,1,22.5,12Zm-1,0A9.5,9.5,0,1,0,12,21.5,9.511,9.511,0,0,0,21.5,12Z"/></svg>)
}
export default PollVerticalCircle
