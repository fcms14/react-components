import { ToasterInterface } from "../../../interfaces"
import { Toaster } from "."
import ToasterListStyle from "./ToasterListStyle"

interface Interface {
  data: ToasterInterface[]
}

const ToasterList = ({ data }: Interface) => {
  return (
    <ToasterListStyle>
      {data.map((data: ToasterInterface, index: number) =>
        <Toaster.Default {...data} key={index} />
      )}
    </ToasterListStyle>
  )
}

export default ToasterList