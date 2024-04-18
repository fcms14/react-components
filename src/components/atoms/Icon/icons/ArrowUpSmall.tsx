
import React from "react"
import IconInterface from './IconInterface'
const ArrowUpSmall = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="arrow-up-small" style={{fill: fill}} d="M16.354,8.354a.5.5,0,0,1-.708,0L12.5,5.207V20a.5.5,0,0,1-1,0V5.207L8.354,8.354a.5.5,0,0,1-.708-.708l4-4a.518.518,0,0,1,.163-.109.505.505,0,0,1,.382,0,.518.518,0,0,1,.163.109l4,4A.5.5,0,0,1,16.354,8.354Z"/></svg>)
}
export default ArrowUpSmall
