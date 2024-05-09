
import React from "react"
import IconInterface from './IconInterface'
const CreditCard = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="credit-card" style={{fill: fill}} d="M18,4.5H6C3.71,4.5,2.5,5.71,2.5,8v8c0,2.29,1.21,3.5,3.5,3.5H18c2.29,0,3.5-1.21,3.5-3.5V8C21.5,5.71,20.29,4.5,18,4.5ZM6,5.5H18c1.729,0,2.5.771,2.5,2.5V9.5H3.5V8C3.5,6.271,4.271,5.5,6,5.5Zm12,13H6c-1.729,0-2.5-.771-2.5-2.5V10.5h17V16C20.5,17.729,19.729,18.5,18,18.5ZM10.5,15a.5.5,0,0,1-.5.5H7a.5.5,0,0,1,0-1h3A.5.5,0,0,1,10.5,15Z"/></svg>)
}
export default CreditCard