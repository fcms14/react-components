
import React from "react"
import IconInterface from './IconInterface'
const Tv = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="tv" style={{fill: fill}} d="M18,3.5H6c-1.6,0-3.5.647-3.5,3.731v7.538C2.5,17.853,4.4,18.5,6,18.5H18c1.6,0,3.5-.647,3.5-3.731V7.231C21.5,4.147,19.6,3.5,18,3.5Zm2.5,11.269c0,1.889-.771,2.731-2.5,2.731H6c-1.729,0-2.5-.842-2.5-2.731V7.231C3.5,5.342,4.271,4.5,6,4.5H18c1.729,0,2.5.842,2.5,2.731ZM17.5,21a.5.5,0,0,1-.5.5H7a.5.5,0,0,1,0-1H17A.5.5,0,0,1,17.5,21Z"/></svg>)
}
export default Tv
