import React from "react"

import IconInterface from './IconInterface'

const Balance = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (
    <svg width={width} viewBox="0 0 27 28" version="1.1" style={{
      fill: fill,
      fillRule:'evenodd',
      clipRule:'evenodd',
      strokeLinejoin:'round',
      strokeMiterlimit:2
    }}>
      <g transform="matrix(0.75,0,0,0.75,0,0)">
        <path d="M26.333,0L3,0C2.204,0 1.441,0.316 0.879,0.879C0.316,1.441 0,2.204 0,3C0,3 0,33 0,33C0,33.796 0.316,34.559 0.879,35.121C1.441,35.684 2.204,36 3,36L26.333,36C27.129,36 27.892,35.684 28.455,35.121C29.017,34.559 29.333,33.796 29.333,33L29.333,3C29.333,2.204 29.017,1.441 28.455,0.879C27.892,0.316 27.129,0 26.333,0ZM26.333,2.667C26.422,2.667 26.506,2.702 26.569,2.764C26.569,2.764 26.569,2.764 26.569,2.764C26.632,2.827 26.667,2.912 26.667,3C26.667,3 26.667,33 26.667,33C26.667,33.088 26.632,33.173 26.569,33.236C26.569,33.236 26.569,33.236 26.569,33.236C26.506,33.298 26.422,33.333 26.333,33.333C26.333,33.333 3,33.333 3,33.333C2.912,33.333 2.827,33.298 2.764,33.236C2.764,33.236 2.764,33.236 2.764,33.236C2.702,33.173 2.667,33.088 2.667,33L2.667,3C2.667,2.912 2.702,2.827 2.764,2.764C2.827,2.702 2.912,2.667 3,2.667L26.333,2.667ZM8,29.333L13.833,29.333C14.569,29.333 15.167,28.736 15.167,28C15.167,27.264 14.569,26.667 13.833,26.667L8,26.667C7.264,26.667 6.667,27.264 6.667,28C6.667,28.736 7.264,29.333 8,29.333ZM19.667,24.333L19.667,21.667L8,21.667L8,24.333L19.667,24.333ZM8,6.667C7.264,6.667 6.667,7.264 6.667,8L6.667,16.333C6.667,17.07 7.264,17.667 8,17.667L19.667,17.667C20.403,17.667 21,17.07 21,16.333L21,8C21,7.264 20.403,6.667 19.667,6.667L8,6.667ZM9.333,9.333L18.333,9.333C18.333,9.333 18.333,15 18.333,15C18.333,15 9.333,15 9.333,15L9.333,9.333Z" style={{
          fill: fill,
          fillRule:'evenodd',
          clipRule:'evenodd',
          strokeLinejoin:'round',
          strokeMiterlimit:2
        }} />
      </g>
    </svg>

  )
}
export default Balance
