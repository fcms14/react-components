
import React from "react"
import IconInterface from './IconInterface'
const Link = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="link" style={{fill: fill}} d="M21.5,8.023a5.442,5.442,0,0,1-1.615,3.9L17.92,13.9a.5.5,0,1,1-.709-.7l1.968-1.978a4.53,4.53,0,0,0,0-6.394,4.528,4.528,0,0,0-6.394,0L10.819,6.8a.5.5,0,0,1-.709-.7l1.968-1.978A5.517,5.517,0,0,1,21.5,8.023Zm-8.3,9.186-1.979,1.969a4.521,4.521,0,0,1-6.395-6.392L6.8,10.818a.5.5,0,1,0-.7-.709l-1.98,1.969a5.521,5.521,0,0,0,7.807,7.808L13.9,17.918a.5.5,0,1,0-.7-.709Zm1.478-8.588L8.646,14.646a.5.5,0,0,0,.708.708L15.38,9.328a.5.5,0,1,0-.707-.707Z"/></svg>)
}
export default Link