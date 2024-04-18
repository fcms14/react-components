
import React from "react"
import IconInterface from './IconInterface'

const ActivityCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="activity-circle" style={{fill: fill}} d="M12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5ZM17.354,9.646a.5.5,0,0,1,0,.708L14.56,13.147a1.5,1.5,0,0,1-2.12,0l-1.589-1.585a.5.5,0,0,0-.707,0l-2.79,2.791a.5.5,0,0,1-.708-.708l2.791-2.79a1.5,1.5,0,0,1,2.121,0l1.588,1.585a.5.5,0,0,0,.707,0l2.793-2.794A.5.5,0,0,1,17.354,9.646Z"/></svg>)
}

export default ActivityCircle
