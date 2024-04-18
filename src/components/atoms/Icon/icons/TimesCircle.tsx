
import React from "react"
import IconInterface from './IconInterface'
const TimesCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="times-circle" style={{fill: fill}} d="M12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5ZM15.354,9.354,12.707,12l2.647,2.646a.5.5,0,0,1-.708.708L12,12.707,9.354,15.354a.5.5,0,0,1-.708-.708L11.293,12,8.646,9.354a.5.5,0,0,1,.708-.708L12,11.293l2.646-2.647a.5.5,0,0,1,.708.708Z"/></svg>)
}
export default TimesCircle
