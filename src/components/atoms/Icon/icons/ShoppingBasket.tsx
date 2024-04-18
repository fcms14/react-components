
import React from "react"
import IconInterface from './IconInterface'
const ShoppingBasket = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="shopping-basket" style={{fill: fill}} d="M10.518,14.5v3a.5.5,0,0,1-1,0v-3a.5.5,0,0,1,1,0Zm3.5-.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,1,0v-3A.5.5,0,0,0,14.018,14Zm5.973-2.707-.7,7.056A3.106,3.106,0,0,1,15.8,21.5H8.233c-2.839,0-3.347-1.8-3.482-3.151l-.7-7.039A2.5,2.5,0,0,1,5,6.5H7.3L9.572,2.741a.5.5,0,0,1,.856.518L8.467,6.5H15.5L13.57,3.256a.5.5,0,0,1,.86-.512L16.664,6.5H19a2.5,2.5,0,0,1,.991,4.793Zm-1.7,6.956.675-6.749H5.071l.674,6.749c.14,1.39.6,2.251,2.488,2.251H15.8C17.682,20.5,18.156,19.6,18.292,18.249ZM20.5,9A1.5,1.5,0,0,0,19,7.5H5a1.5,1.5,0,0,0,0,3H19A1.5,1.5,0,0,0,20.5,9Z"/></svg>)
}
export default ShoppingBasket
