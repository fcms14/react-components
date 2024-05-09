import { useState } from "react"
import BreadcrumbStyle from "./BreadcrumbStyle"
import Icon from "../Icon"
import Title from "../Title"


interface Interface {
  paths: string[]
}




const BreadcrumbRoot = (props: Interface) => {
  const [paths, setPaths] = useState(props.paths)

  function getTitle(array: string[]): any {
    return array[0] || ""
  }

  return (
    <BreadcrumbStyle>
      <Title> {getTitle(paths)}
        {paths.map(
          (t: string, i) =>
            i !== 0 ?
              <>
                <div>
                  <Icon width={7} icon={"AngleRight"} color="#BE9E37" />
                </div>

                {t}
              </>
              : 
              ""
        )}
      </Title>
    </BreadcrumbStyle>
  )
}

export default BreadcrumbRoot