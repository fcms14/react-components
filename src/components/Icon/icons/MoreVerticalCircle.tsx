
import React from "react"
import IconInterface from './IconInterface'
const MoreVerticalCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="more-vertical-circle" style={{fill: fill}} d="M12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5ZM13,7.984v.021a.995.995,0,1,1,0-.021Zm0,4v.021a.995.995,0,1,1,0-.021Zm0,4v.021a.995.995,0,1,1,0-.021Z"/></svg>)
}
export default MoreVerticalCircle
