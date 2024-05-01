
import React from "react"
import IconInterface from './IconInterface'
const SortAscendingCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="sort-ascending-circle" style={{fill: fill}} d="M12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5ZM16.5,16a.5.5,0,0,1-.5.5H8a.5.5,0,0,1,0-1h8A.5.5,0,0,1,16.5,16ZM9,12a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,0,1h-5A.5.5,0,0,1,9,12Zm1.5-4a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,0,1H11A.5.5,0,0,1,10.5,8Z"/></svg>)
}
export default SortAscendingCircle
