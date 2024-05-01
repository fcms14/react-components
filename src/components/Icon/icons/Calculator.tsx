import React from "react"

import IconInterface from './IconInterface'

const Calculator = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (
    <svg width={width} viewBox="0 0 27 28" version="1.1" style={{
      fillRule:'evenodd',
      clipRule:'evenodd',
      strokeLinejoin:'round',
      strokeMiterlimit:2
    }}>
      <g transform="matrix(0.75,0,0,0.75,0,0)">
        <g transform="matrix(1,0,0,1,-42,-22)">
          <g>
            <g>
              <path d="M75,23.333L45,23.333C44.08,23.333 43.333,24.08 43.333,25L43.333,55C43.333,55.92 44.08,56.667 45,56.667L75,56.667C75.921,56.667 76.667,55.92 76.667,55L76.667,25C76.667,24.08 75.921,23.333 75,23.333Z" style={{
                fill:'none',
                fillRule:'nonzero',
                stroke:fill,
                strokeWidth:'2.67px',
              }}/>
              <path d="M43.333,29.167L43.333,39.167M43.333,31.667L76.667,31.667L43.333,31.667ZM76.667,29.167L76.667,39.167L76.667,29.167ZM50,38.333L53.333,38.333L50,38.333ZM58.333,38.333L61.667,38.333L58.333,38.333ZM66.667,38.333L70,38.333L66.667,38.333ZM50,44.167L53.333,44.167L50,44.167ZM58.333,44.167L61.667,44.167L58.333,44.167ZM66.667,44.167L70,44.167L66.667,44.167ZM50,50L53.333,50L50,50ZM58.333,50L61.667,50L58.333,50ZM66.667,50L70,50L66.667,50Z" style={{
                fill:'none',
                fillRule:'nonzero',
                stroke:fill,
                strokeWidth:'2.67px',
              }}/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
export default Calculator
