
import React from "react"
import IconInterface from './IconInterface'
const ChatDots = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="chat-dots" style={{fill: fill}} d="M12,2.5a9.488,9.488,0,0,0-8.62,13.474,1.436,1.436,0,0,1,.038,1.045l-.841,2.5a1.5,1.5,0,0,0,1.9,1.9l2.494-.837a1.435,1.435,0,0,1,1.056.037A9.5,9.5,0,1,0,12,2.5Zm0,18a8.47,8.47,0,0,1-3.543-.781,2.424,2.424,0,0,0-1.795-.083l-2.5.839a.507.507,0,0,1-.638-.636l.843-2.507a2.429,2.429,0,0,0-.084-1.782A8.5,8.5,0,1,1,12,20.5ZM12.75,12a.75.75,0,1,1-.761-.75H12A.748.748,0,0,1,12.75,12Zm4,0a.75.75,0,1,1-.761-.75H16A.748.748,0,0,1,16.75,12Zm-8,0a.75.75,0,1,1-.761-.75H8A.748.748,0,0,1,8.75,12Z"/></svg>)
}
export default ChatDots
