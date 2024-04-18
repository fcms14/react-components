
import React from "react"
import IconInterface from './IconInterface'

const AngleDown = (props: IconInterface) => {
  const width = props.width || 12
  const fill = props.fill || '#000000'

  return (
    <svg width={width} height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill={fill}/>
    </svg>
  )
}

export default AngleDown
