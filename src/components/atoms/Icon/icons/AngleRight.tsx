
import React from "react"
import IconInterface from './IconInterface'

const AngleRight = (props: IconInterface) => {
  const width = props.width || 10
  const fill = props.fill || '#000000'

  return (
    <svg width={width} viewBox="0 0 8 12" fill="none">
      <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill={fill}/>
    </svg>
  )
}

export default AngleRight
