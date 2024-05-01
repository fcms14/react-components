import React from "react"

import IconInterface from './IconInterface'
const Dashboard = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (
    <svg
      width   = {width}
      height  = {width}
      viewBox = "0 0 22 22"
      fill    = "none"
    >
      <path
        d="M0.333252 12.1849H9.81473V0.333008H0.333252V12.1849ZM0.333252 21.6663H9.81473V14.5552H0.333252V21.6663ZM12.1851 21.6663H21.6666V9.81449H12.1851V21.6663ZM12.1851 0.333008V7.44412H21.6666V0.333008H12.1851Z"
        fill={fill}
      />
    </svg>
  )
}
export default Dashboard
