
import React from "react"
import IconInterface from './IconInterface'
const InfoCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="info-circle" style={{fill: fill}} d="M12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5Zm.5-9.571V16.5a.5.5,0,0,1-1,0V11.929a.5.5,0,0,1,1,0ZM12.75,8.5a.75.75,0,1,1-.761-.75H12A.748.748,0,0,1,12.75,8.5Z"/></svg>)
}
export default InfoCircle
