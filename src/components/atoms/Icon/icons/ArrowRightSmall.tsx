
import React from "react"
import IconInterface from './IconInterface'
const ArrowRightSmall = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="arrow-right-small" style={{fill: fill}} d="M20.353,12.354l-4,4a.5.5,0,0,1-.708-.708L18.793,12.5H4a.5.5,0,0,1,0-1H18.793L15.646,8.354a.5.5,0,0,1,.708-.708l4,4a.5.5,0,0,1,0,.708Z"/></svg>)
}
export default ArrowRightSmall
