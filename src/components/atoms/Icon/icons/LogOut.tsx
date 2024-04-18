
import React from "react"
import IconInterface from './IconInterface'
const LogOut = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (
    <svg width={width} viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.6665 5.33333L18.7865 7.21333L22.2265 10.6667H8.6665V13.3333H22.2265L18.7865 16.7733L20.6665 18.6667L27.3332 12L20.6665 5.33333ZM3.33317 2.66667H13.9998V0H3.33317C1.8665 0 0.666504 1.2 0.666504 2.66667V21.3333C0.666504 22.8 1.8665 24 3.33317 24H13.9998V21.3333H3.33317V2.66667Z" fill={fill}/>
    </svg>
  )
}
export default LogOut
