
import React from "react"
import IconInterface from './IconInterface'
const Bookmark = (props: IconInterface) => {
  const width = props.width || 24
  const fill = props.fill || '#000000'

  return (<svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}><path id="bookmark" style={{fill: fill}} d="M16,2.5H8C5.71,2.5,4.5,3.71,4.5,6V21a.5.5,0,0,0,.249.433.5.5,0,0,0,.5,0L12,17.576l6.752,3.858A.5.5,0,0,0,19.5,21V6C19.5,3.71,18.29,2.5,16,2.5Zm2.5,17.638-6.252-3.572a.5.5,0,0,0-.5,0L5.5,20.138V6c0-1.729.771-2.5,2.5-2.5h8c1.729,0,2.5.771,2.5,2.5ZM15.5,8a.5.5,0,0,1-.5.5H9a.5.5,0,0,1,0-1h6A.5.5,0,0,1,15.5,8Z"/></svg>)
}
export default Bookmark
