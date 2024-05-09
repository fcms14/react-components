
import React from "react"
import IconInterface from './IconInterface'
const MenuLeftAlt = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="menu-left-alt" style={{fill: fill}} d="M2.5,6A.5.5,0,0,1,3,5.5H16a.5.5,0,0,1,0,1H3A.5.5,0,0,1,2.5,6ZM21,11.5H3a.5.5,0,0,0,0,1H21a.5.5,0,0,0,0-1Zm-9,6H3a.5.5,0,0,0,0,1h9a.5.5,0,0,0,0-1Z"/></svg>)
}
export default MenuLeftAlt