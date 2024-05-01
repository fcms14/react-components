
import React from "react"
import IconInterface from './IconInterface'
const SortDescendingCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="sort-descending-circle" style={{fill: fill}} d="M12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5ZM16.5,8a.5.5,0,0,1-.5.5H8a.5.5,0,0,1,0-1h8A.5.5,0,0,1,16.5,8ZM15,12a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1,0-1h5A.5.5,0,0,1,15,12Zm-1.5,4a.5.5,0,0,1-.5.5H11a.5.5,0,0,1,0-1h2A.5.5,0,0,1,13.5,16Z"/></svg>)
}
export default SortDescendingCircle
