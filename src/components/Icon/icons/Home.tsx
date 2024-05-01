
import React from "react"
import IconInterface from './IconInterface'
const Home = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="home" style={{fill: fill}} d="M20.049,8.333,13.928,3.2a3,3,0,0,0-3.856,0L3.951,8.333C3.024,9.1,2.5,9.636,2.5,11.65V18c0,2.29,1.21,3.5,3.5,3.5h4v-5a2,2,0,0,1,4,0v5h4c2.29,0,3.5-1.21,3.5-3.5V11.65C21.5,9.636,20.976,9.1,20.049,8.333ZM20.5,18c0,1.729-.771,2.5-2.5,2.5H15v-4a3,3,0,0,0-6,0v4H6c-1.729,0-2.5-.771-2.5-2.5V11.65c0-1.643.319-1.907,1.09-2.547l6.125-5.135a2,2,0,0,1,2.57,0L19.41,9.1c.771.64,1.09.9,1.09,2.547Z"/></svg>)
}
export default Home
