
import React from "react"
import IconInterface from './IconInterface'
const Eye = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="eye" style={{fill: fill}} d="M21.021,10.267C19.734,8.113,16.853,4.5,12,4.5S4.266,8.113,2.979,10.267a3.373,3.373,0,0,0,0,3.466C4.266,15.887,7.147,19.5,12,19.5s7.734-3.613,9.021-5.767A3.373,3.373,0,0,0,21.021,10.267Zm-.858,2.954h0C18.985,15.192,16.358,18.5,12,18.5s-6.985-3.308-8.163-5.279a2.38,2.38,0,0,1,0-2.442C5.015,8.808,7.642,5.5,12,5.5s6.985,3.308,8.163,5.279A2.382,2.382,0,0,1,20.163,13.221ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,7a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/></svg>)
}
export default Eye
