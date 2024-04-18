import React from "react"

import IconInterface from './IconInterface'

const Payments = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (
    <svg
      width={width}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.667012L-8.15944e-07 19.3336L8.40003 19.3336L8.40003 0.666992L0 0.667012ZM10.8 0.667012L10.8 19.3336L14.4 19.3336L14.4 0.667012L10.8 0.667012ZM19.2 0.667012L16.8 0.667012L16.8 19.3336L19.2 19.3336L19.2 0.667012Z" fill={fill}/>
      <path d="M20.4 0.667012L24 0.667011L24 19.3336L20.4 19.3336L20.4 0.667012Z" fill={fill}/>
    </svg>
  )
}
export default Payments
