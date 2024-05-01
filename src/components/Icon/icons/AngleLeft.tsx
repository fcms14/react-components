
import React from "react"
import IconInterface from './IconInterface'

const AngleLeft = (props: IconInterface) => {
  const width = props.width || 10
  const fill = props.fill || '#000000'

  return (
    <svg width={width} viewBox="0 0 8 12" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{
      fillRule:'evenodd',
      clipRule:'evenodd',
      strokeLinejoin:'round',
      strokeMiterlimit:2,
    }}>
      <g transform="matrix(-1,0,0,1,8.58968,0)">
        <path d="M0.59,10.59L5.17,6L0.59,1.41L2,0L8,6L2,12L0.59,10.59Z" style={{
          fill:fill,
          fillRule:'nonzero'
        }}/>
      </g>
    </svg>
  )
}

export default AngleLeft
