
import React from "react"
import IconInterface from './IconInterface'
const PlayCircle = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="play-circle" style={{fill: fill}} d="M15.721,10.513l-4.479-2.74a1.838,1.838,0,0,0-2.8,1.563v5.328a1.811,1.811,0,0,0,.939,1.6,1.818,1.818,0,0,0,1.859-.036l4.479-2.74a1.742,1.742,0,0,0,0-2.974ZM15.2,12.634l-4.478,2.741a.838.838,0,0,1-1.277-.711V9.336a.825.825,0,0,1,.427-.727.831.831,0,0,1,.85.016L15.2,11.366h0a.741.741,0,0,1,0,1.268ZM12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5Z"/></svg>)
}
export default PlayCircle