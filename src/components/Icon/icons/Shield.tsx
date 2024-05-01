
import React from "react"
import IconInterface from './IconInterface'
const Shield = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="shield" style={{fill: fill}} d="M21.1,4.51a28.561,28.561,0,0,1-8.856-2.956.564.564,0,0,0-.478.014A29.271,29.271,0,0,1,2.9,4.51.5.5,0,0,0,2.5,5v5.889c0,8.062,7.782,11.065,9.342,11.585a.493.493,0,0,0,.316,0c1.56-.52,9.342-3.523,9.342-11.585V5A.5.5,0,0,0,21.1,4.51Zm-.6,6.379c0,7.137-6.753,9.97-8.5,10.583-1.747-.613-8.5-3.446-8.5-10.583V5.409a29.467,29.467,0,0,0,8.516-2.85A29.029,29.029,0,0,0,20.5,5.409Z"/></svg>)
}
export default Shield
