
import React from "react"
import IconInterface from './IconInterface'
const Image = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="image" style={{fill: fill}} d="M18,3.5H6C3.71,3.5,2.5,4.71,2.5,7V17c0,2.29,1.21,3.5,3.5,3.5H18c2.29,0,3.5-1.21,3.5-3.5V7C21.5,4.71,20.29,3.5,18,3.5ZM6,4.5H18c1.729,0,2.5.771,2.5,2.5v6.793L16.063,9.356a1.543,1.543,0,0,0-2.126,0L9,14.3l-.941-.94a1.543,1.543,0,0,0-2.126,0L3.5,15.793V7C3.5,5.271,4.271,4.5,6,4.5Zm12,15H6c-1.659,0-2.428-.72-2.488-2.3l3.132-3.132a.52.52,0,0,1,.712,0L8.3,15A1.025,1.025,0,0,0,9.7,15l4.941-4.94a.52.52,0,0,1,.712,0L20.5,15.207V17C20.5,18.729,19.729,19.5,18,19.5ZM7,9a1,1,0,1,1,1,1A1,1,0,0,1,7,9Z"/></svg>)
}
export default Image
