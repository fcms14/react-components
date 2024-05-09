
import React from "react"
import IconInterface from './IconInterface'
const Bell = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="bell" style={{fill: fill}} d="M14.162,20.252a2.5,2.5,0,0,1-4.324,0,.5.5,0,1,1,.864-.5,1.5,1.5,0,0,0,2.6,0,.5.5,0,1,1,.864.5Zm6.288-2.035A.5.5,0,0,1,20,18.5H4a.5.5,0,0,1-.391-.812,9.481,9.481,0,0,0,1.9-5.188V8.995a6.5,6.5,0,0,1,12.99,0V12.5a9.481,9.481,0,0,0,1.9,5.188A.5.5,0,0,1,20.45,18.217Zm-1.4-.717a9.867,9.867,0,0,1-1.556-5V8.995a5.495,5.495,0,0,0-10.99,0V12.5a9.867,9.867,0,0,1-1.556,5Z"/></svg>)
}
export default Bell