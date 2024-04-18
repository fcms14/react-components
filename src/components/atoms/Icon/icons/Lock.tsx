import React from "react"
import IconInterface from './IconInterface'
const Lock = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}>
      <g id="Backgrounds">
        <rect id="_19-Security" data-name="19-Security" style={{fill: fill}} x="-288" y="-236" width="880" height="388"/>
      </g>
      <g id="Layer">
        <path id="lock" fill="#ffffff" d="m16.5,8.535v-1.535c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5v1.535c-1.958.172-3,1.353-3,3.465v6c0,2.29,1.21,3.5,3.5,3.5h8c2.29,0,3.5-1.21,3.5-3.5v-6c0-2.112-1.042-3.293-3-3.465Zm-4.5-5.035c1.93,0,3.5,1.57,3.5,3.5v1.5h-7v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm6.5,14.5c0,1.729-.771,2.5-2.5,2.5h-8c-1.729,0-2.5-.771-2.5-2.5v-6c0-1.729.771-2.5,2.5-2.5h8c1.729,0,2.5.771,2.5,2.5v6Zm-5.5-4c0,.368-.206.675-.5.849v2.151c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2.157c-.292-.175-.5-.479-.5-.843,0-.553.435-1,.985-1h.02c.55,0,.995.447.995,1Z"/>
      </g>
    </svg>
  )
}
export default Lock
