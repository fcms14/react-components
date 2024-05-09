
import React from "react"
import IconInterface from './IconInterface'

const Check = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#43A047'

  return (<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width={width}><path fill={fill} d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/></svg>)
}
export default Check