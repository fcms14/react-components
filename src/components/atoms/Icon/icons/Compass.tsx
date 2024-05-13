
import React from "react"
import IconInterface from './IconInterface'
const Compass = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="compass" style={{fill: fill}} d="M12,1.5A10.5,10.5,0,1,0,22.5,12,10.512,10.512,0,0,0,12,1.5Zm0,20A9.5,9.5,0,1,1,21.5,12,9.511,9.511,0,0,1,12,21.5ZM15.446,6.605,10.593,8.494a3.628,3.628,0,0,0-2.056,2.048l-1.93,4.9A1.509,1.509,0,0,0,8,17.5a1.527,1.527,0,0,0,.573-.113l4.879-1.974a3.64,3.64,0,0,0,2-2.013L17.39,8.567a1.505,1.505,0,0,0-1.944-1.962ZM16.461,8.2l-1.934,4.833a2.635,2.635,0,0,1-1.45,1.457L8.2,16.46a.5.5,0,0,1-.66-.653l1.929-4.9a2.63,2.63,0,0,1,1.489-1.483l4.853-1.888a.505.505,0,0,1,.652.659ZM12.75,12.007a.75.75,0,1,1-.75-.75A.75.75,0,0,1,12.75,12.007Z"/></svg>)
}
export default Compass