
import React from "react"
import IconInterface from './IconInterface'
const PercentCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="percent-circle" style={{fill: fill}} d="M16.354,7.646a.5.5,0,0,1,0,.708l-8,8a.5.5,0,0,1-.708-.708l8-8A.5.5,0,0,1,16.354,7.646Zm.146,7.1A1.75,1.75,0,1,1,14.75,13,1.752,1.752,0,0,1,16.5,14.75Zm-1,0a.75.75,0,1,0-.75.75A.75.75,0,0,0,15.5,14.75Zm-8-5.5A1.75,1.75,0,1,1,9.25,11,1.752,1.752,0,0,1,7.5,9.25Zm1,0a.75.75,0,1,0,.75-.75A.75.75,0,0,0,8.5,9.25ZM22.5,12A10.5,10.5,0,1,1,12,1.5,10.512,10.512,0,0,1,22.5,12Zm-1,0A9.5,9.5,0,1,0,12,21.5,9.511,9.511,0,0,0,21.5,12Z"/></svg>)
}
export default PercentCircle