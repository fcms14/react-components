
import React from "react"
import IconInterface from './IconInterface'
const Calendar = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="calendar" style={{fill: fill}} d="M18,4H16.5V3a.5.5,0,0,0-1,0V4h-7V3a.5.5,0,0,0-1,0V4H6C3.71,4,2.5,5.21,2.5,7.5V18c0,2.29,1.21,3.5,3.5,3.5H18c2.29,0,3.5-1.21,3.5-3.5V7.5C21.5,5.21,20.29,4,18,4ZM6,5H7.5V6a.5.5,0,0,0,1,0V5h7V6a.5.5,0,0,0,1,0V5H18c1.729,0,2.5.771,2.5,2.5v1H3.5v-1C3.5,5.771,4.271,5,6,5ZM18,20.5H6c-1.729,0-2.5-.771-2.5-2.5V9.5h17V18C20.5,19.729,19.729,20.5,18,20.5ZM8.75,13a.75.75,0,1,1-.761-.75H8A.748.748,0,0,1,8.75,13Zm4,0a.75.75,0,1,1-.761-.75H12A.748.748,0,0,1,12.75,13Zm4,0a.75.75,0,1,1-.761-.75H16A.748.748,0,0,1,16.75,13Zm-8,4a.75.75,0,1,1-.761-.75H8A.748.748,0,0,1,8.75,17Zm4,0a.75.75,0,1,1-.761-.75H12A.748.748,0,0,1,12.75,17Zm4,0a.75.75,0,1,1-.761-.75H16A.748.748,0,0,1,16.75,17Z"/></svg>)
}
export default Calendar