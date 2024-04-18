import React from "react"

import IconInterface from './IconInterface'

const Transfer = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (
    <svg width={width} viewBox="0 0 23 22" fill="none">
      <path d="M6.66645 12.5235V7.95205H22.6667V4.90444H6.66645V0.333008L0 6.33301L6.66645 12.5235Z" fill={fill}/>
      <path d="M16.0003 9.66597L16.0003 14.2374L8.26821e-05 14.2374L8.24156e-05 17.285L16.0003 17.285L16.0003 21.8564L22.6667 15.8564L16.0003 9.66597Z" fill={fill}/>
    </svg>
  )
}
export default Transfer
