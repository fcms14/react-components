
import React from "react"
import IconInterface from './IconInterface'
const File = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="file" style={{fill: fill}} d="M20.354,8.646l-6-6A.5.5,0,0,0,14,2.5H8C5.71,2.5,4.5,3.71,4.5,6V18c0,2.29,1.21,3.5,3.5,3.5h9c2.29,0,3.5-1.21,3.5-3.5V9A.5.5,0,0,0,20.354,8.646ZM14.5,4.207,18.793,8.5H17c-1.729,0-2.5-.771-2.5-2.5ZM17,20.5H8c-1.729,0-2.5-.771-2.5-2.5V6c0-1.729.771-2.5,2.5-2.5h5.5V6c0,2.29,1.21,3.5,3.5,3.5h2.5V18C19.5,19.729,18.729,20.5,17,20.5Z"/></svg>)
}
export default File
