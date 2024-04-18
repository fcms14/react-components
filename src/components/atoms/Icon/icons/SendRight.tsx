
import React from "react"
import IconInterface from './IconInterface'
const SendRight = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="send-right" style={{fill: fill}} d="M20.275,9.843,8.868,3.021A3.527,3.527,0,0,0,4.049,7.9L6.6,12,4.049,16.1a3.469,3.469,0,0,0,.48,4.32A3.594,3.594,0,0,0,7.055,21.5a3.5,3.5,0,0,0,1.813-.518l11.407-6.822a2.512,2.512,0,0,0,0-4.314ZM19.762,13.3,8.354,20.12a2.475,2.475,0,0,1-3.111-.4A2.455,2.455,0,0,1,4.9,16.632L7.465,12.5H13a.5.5,0,0,0,0-1H7.465L4.9,7.368a2.455,2.455,0,0,1,.345-3.091,2.571,2.571,0,0,1,1.8-.778,2.517,2.517,0,0,1,1.308.381L19.762,10.7a1.51,1.51,0,0,1,0,2.6Z"/></svg>)
}
export default SendRight
