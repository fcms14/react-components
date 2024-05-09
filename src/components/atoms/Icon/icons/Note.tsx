
import React from "react"
import IconInterface from './IconInterface'
const Note = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="note" style={{fill: fill}} d="M16.5,11a.5.5,0,0,1-.5.5H8a.5.5,0,0,1,0-1h8A.5.5,0,0,1,16.5,11ZM13,14.5H8a.5.5,0,0,0,0,1h5a.5.5,0,0,0,0-1Zm8.5-7.674V18.674c0,2.5-1.324,3.826-3.828,3.826H6.328c-2.5,0-3.828-1.323-3.828-3.826V6.826C2.5,4.323,3.824,3,6.328,3h.728V2a.5.5,0,1,1,1,0V3H11.5V2a.5.5,0,0,1,1,0V3h3.444V2a.5.5,0,0,1,1,0V3h.728C20.176,3,21.5,4.323,21.5,6.826Zm-1,0C20.5,4.9,19.6,4,17.672,4h-.728V5a.5.5,0,1,1-1,0V4H12.5V5a.5.5,0,0,1-1,0V4H8.056V5a.5.5,0,1,1-1,0V4H6.328C4.4,4,3.5,4.9,3.5,6.826V18.674c0,1.928.9,2.826,2.828,2.826H17.672c1.93,0,2.828-.9,2.828-2.826Z"/></svg>)
}
export default Note