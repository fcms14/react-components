
import React from "react"
import IconInterface from './IconInterface'
const Search = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="search" style={{fill: fill}} d="M21.354,20.646l-4.01-4.009a8.533,8.533,0,1,0-.707.707l4.009,4.01a.5.5,0,0,0,.708-.708ZM3.5,11A7.5,7.5,0,1,1,11,18.5,7.509,7.509,0,0,1,3.5,11Z"/></svg>)
}
export default Search
