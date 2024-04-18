
import React from "react"
import IconInterface from './IconInterface'

const ArrowDownSmall = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="arrow-down-small" style={{fill: fill}} d="M16.354,16.354l-4,4a.518.518,0,0,1-.163.109.5.5,0,0,1-.382,0,.518.518,0,0,1-.163-.109l-4-4a.5.5,0,0,1,.708-.708L11.5,18.793V4a.5.5,0,0,1,1,0V18.793l3.146-3.147a.5.5,0,0,1,.708.708Z"/></svg>)
}

export default ArrowDownSmall
