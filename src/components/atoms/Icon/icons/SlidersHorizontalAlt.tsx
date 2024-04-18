
import React from "react"
import IconInterface from './IconInterface'
const SlidersHorizontalAlt = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="sliders-horizontal-alt" style={{fill: fill}} d="M6,3.5A3.5,3.5,0,1,0,9.5,7,3.5,3.5,0,0,0,6,3.5Zm0,6A2.5,2.5,0,1,1,8.5,7,2.5,2.5,0,0,1,6,9.5Zm12,4A3.5,3.5,0,1,0,21.5,17,3.5,3.5,0,0,0,18,13.5Zm0,6A2.5,2.5,0,1,1,20.5,17,2.5,2.5,0,0,1,18,19.5ZM14.5,7a.5.5,0,0,1,.5-.5h6a.5.5,0,0,1,0,1H15A.5.5,0,0,1,14.5,7Zm-5,10a.5.5,0,0,1-.5.5H3a.5.5,0,0,1,0-1H9A.5.5,0,0,1,9.5,17Z"/></svg>)
}
export default SlidersHorizontalAlt
