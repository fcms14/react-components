
import React from "react"
import IconInterface from './IconInterface'
const Pen = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="pen" style={{fill: fill}} d="M20.768,5.46,18.54,3.232A2.488,2.488,0,0,0,16.771,2.5h0A2.484,2.484,0,0,0,15,3.236L2.646,15.647A.5.5,0,0,0,2.5,16v5a.5.5,0,0,0,.5.5H8a.5.5,0,0,0,.353-.146L20.764,9a2.5,2.5,0,0,0,0-3.54ZM7.794,20.5H3.5V16.207l9.242-9.285,4.337,4.335ZM20.059,8.291l-2.271,2.261-4.34-4.339,2.261-2.272A1.487,1.487,0,0,1,16.77,3.5h0a1.491,1.491,0,0,1,1.062.439l2.228,2.228a1.5,1.5,0,0,1,0,2.124Z"/></svg>)
}
export default Pen