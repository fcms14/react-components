import { ToasterInterface } from "../../../interfaces"
import { Toaster } from "."
import ToasterListStyle from "./ToasterListStyle"

interface Interface {
  data: ToasterInterface[]
}

const ToasterList = ({ data }: Interface) => {
  return (
    <ToasterListStyle>
      {data.map((data: ToasterInterface) =>
        <Toaster.Default {...data} />
      )}
    </ToasterListStyle>
  )
}

export default ToasterList