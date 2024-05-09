
import React from "react"
import IconInterface from './IconInterface'
const QuestionCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="question-circle" style={{fill: fill}} d="M12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5ZM14.845,9.388a2.84,2.84,0,0,1-1.382,2.933c-.747.5-.941.818-.989.963a.5.5,0,0,1-.474.341.49.49,0,0,1-.159-.026.5.5,0,0,1-.315-.633,3.2,3.2,0,0,1,1.38-1.476,1.848,1.848,0,0,0,.954-1.93,1.9,1.9,0,0,0-1.513-1.529,1.872,1.872,0,0,0-1.553.408,1.913,1.913,0,0,0-.685,1.472.5.5,0,0,1-1,0,2.89,2.89,0,0,1,5.736-.523ZM12.75,16.5a.75.75,0,1,1-.761-.75H12A.748.748,0,0,1,12.75,16.5Z"/></svg>)
}
export default QuestionCircle