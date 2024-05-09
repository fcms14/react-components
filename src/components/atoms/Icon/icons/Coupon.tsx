
import React from "react"
import IconInterface from './IconInterface'
const Coupon = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="coupon" style={{fill: fill}} d="M21,10.5h.5V7c0-2.29-1.21-3.5-3.5-3.5H6C3.71,3.5,2.5,4.71,2.5,7v3.5H3a1.5,1.5,0,0,1,0,3H2.5V17c0,2.29,1.21,3.5,3.5,3.5H18c2.29,0,3.5-1.21,3.5-3.5V13.5H21a1.5,1.5,0,0,1,0-3Zm-.5,3.95V17c0,1.729-.771,2.5-2.5,2.5H15.5v-3a.5.5,0,0,0-1,0v3H6c-1.729,0-2.5-.771-2.5-2.5V14.45a2.5,2.5,0,0,0,0-4.9V7c0-1.729.771-2.5,2.5-2.5h8.5v3a.5.5,0,0,0,1,0v-3H18c1.729,0,2.5.771,2.5,2.5V9.55a2.5,2.5,0,0,0,0,4.9Zm-5-3.7v2.5a.5.5,0,0,1-1,0v-2.5a.5.5,0,0,1,1,0Z"/></svg>)
}
export default Coupon