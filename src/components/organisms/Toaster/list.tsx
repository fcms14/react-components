import { NotificationInterface } from "../../../interfaces"
import { Toaster as ToasterMolecule } from "../../molecules/Toaster"
import { Toaster } from "."
import ToasterListStyle from "./ToasterListStyle"
import { MdClose } from "react-icons/md"
import { Row } from "../../molecules/Row"
import { dispatchHideNotifications } from "../../../features/toaster/toasterDispatcher"

interface Interface {
  data: NotificationInterface[]
}

const ToasterList = ({ data }: Interface) => {
  return (
    <ToasterListStyle onMouseLeave={() => dispatchHideNotifications()}>
      <Row.Root>
        <ToasterMolecule.Icon icon={MdClose} onClick={() => dispatchHideNotifications()} />
      </Row.Root>
      {data.map((data: NotificationInterface, index: number) =>
        <Toaster.Default {...data} key={index} index={index + 1} />
      )}
    </ToasterListStyle>
    // <div style={{
    //   position: "fixed",
    //   top: 0,
    //   left: 0,
    //   width: "100dvh",
    //   height: "100dvh",
    //   backgroundColor: "rgba(0, 0, 0, 0.5)",
    //   zIndex: 2,
    //   opacity: 1,
    //   transition: "opacity 0.3s ease"
    // }}
    //   onClick={() => dispatchHideNotifications()}>
    // </div>
  )
}

export default ToasterList