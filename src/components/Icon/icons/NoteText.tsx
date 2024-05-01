
import React from "react"
import IconInterface from './IconInterface'
const NoteText = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="note-text" style={{fill: fill}} d="M17,2.5H7C4.71,2.5,3.5,3.71,3.5,6V18c0,2.29,1.21,3.5,3.5,3.5H17c2.29,0,3.5-1.21,3.5-3.5V6C20.5,3.71,19.29,2.5,17,2.5ZM19.5,18c0,1.729-.771,2.5-2.5,2.5H7c-1.729,0-2.5-.771-2.5-2.5V6c0-1.729.771-2.5,2.5-2.5H17c1.729,0,2.5.771,2.5,2.5Zm-3-6a.5.5,0,0,1-.5.5H8a.5.5,0,0,1,0-1h8A.5.5,0,0,1,16.5,12Zm-3,4a.5.5,0,0,1-.5.5H8a.5.5,0,0,1,0-1h5A.5.5,0,0,1,13.5,16Zm3-8a.5.5,0,0,1-.5.5H8a.5.5,0,0,1,0-1h8A.5.5,0,0,1,16.5,8Z"/></svg>)
}
export default NoteText
