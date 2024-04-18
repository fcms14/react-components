
import React from "react"
import IconInterface from './IconInterface'
const UserAlt = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (
    <svg width={width} height={width} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9999 10.9997C13.9466 10.9997 16.3333 8.61301 16.3333 5.66634C16.3333 2.71967 13.9466 0.333008 10.9999 0.333008C8.05325 0.333008 5.66658 2.71967 5.66658 5.66634C5.66658 8.61301 8.05325 10.9997 10.9999 10.9997ZM10.9999 13.6663C7.43992 13.6663 0.333252 15.453 0.333252 18.9997V21.6663H21.6666V18.9997C21.6666 15.453 14.5599 13.6663 10.9999 13.6663Z" fill={fill}/>
    </svg>
  )
}
export default UserAlt
