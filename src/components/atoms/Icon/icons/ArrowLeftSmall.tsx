
import React from "react"
import IconInterface from './IconInterface'

const ArrowLeftSmall = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="arrow-left-small" style={{fill: fill}} d="M20.5,12a.5.5,0,0,1-.5.5H5.207l3.147,3.146a.5.5,0,0,1-.708.708l-4-4a.5.5,0,0,1,0-.708l4-4a.5.5,0,0,1,.708.708L5.207,11.5H20A.5.5,0,0,1,20.5,12Z"/></svg>)
}

export default ArrowLeftSmall