
import React from "react"
import IconInterface from './IconInterface'

const AngleLeftCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="angle-left-circle" style={{fill: fill}} d="M13.354,9.354,10.707,12l2.647,2.646a.5.5,0,0,1-.708.708l-3-3a.5.5,0,0,1,0-.708l3-3a.5.5,0,0,1,.708.708ZM22.5,12A10.5,10.5,0,1,1,12,1.5,10.512,10.512,0,0,1,22.5,12Zm-1,0A9.5,9.5,0,1,0,12,21.5,9.511,9.511,0,0,0,21.5,12Z"/></svg>)
}

export default AngleLeftCircle
