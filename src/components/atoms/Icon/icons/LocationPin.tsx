
import React from "react"
import IconInterface from './IconInterface'
const LocationPin = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="location-pin" style={{fill: fill}} d="M12,2.5A8.51,8.51,0,0,0,3.5,11c0,4.983,4.629,8.041,7.692,10.064l.531.352a.5.5,0,0,0,.554,0l.531-.352C15.871,19.041,20.5,15.983,20.5,11A8.51,8.51,0,0,0,12,2.5Zm.256,17.73L12,20.4l-.256-.17C8.859,18.325,4.5,15.445,4.5,11a7.5,7.5,0,0,1,15,0C19.5,15.445,15.141,18.325,12.256,20.23ZM12,8a3,3,0,1,0,3,3A3,3,0,0,0,12,8Zm0,5a2,2,0,1,1,2-2A2,2,0,0,1,12,13Z"/></svg>)
}
export default LocationPin