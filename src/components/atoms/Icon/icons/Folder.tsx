
import React from "react"
import IconInterface from './IconInterface'
const Folder = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="folder" style={{fill: fill}} d="M18,6.5H13.207L10.354,3.646A.5.5,0,0,0,10,3.5H6C3.71,3.5,2.5,4.71,2.5,7V17c0,2.29,1.21,3.5,3.5,3.5H18c2.29,0,3.5-1.21,3.5-3.5V10C21.5,7.71,20.29,6.5,18,6.5ZM20.5,17c0,1.729-.771,2.5-2.5,2.5H6c-1.729,0-2.5-.771-2.5-2.5V7c0-1.729.771-2.5,2.5-2.5H9.793l2.853,2.854A.5.5,0,0,0,13,7.5h5c1.729,0,2.5.771,2.5,2.5Z"/></svg>)
}
export default Folder