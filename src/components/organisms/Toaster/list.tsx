import { NotificationInterface } from "../../../interfaces"
import { Toaster } from "."
import ToasterListStyle from "./ToasterListStyle"
import { MdClose } from "react-icons/md"
import { dispatchHideNotifications, dispatchHideNotificationsNow, dispatchShowNotifications } from "../../../features/toaster/toasterDispatcher"
import { isMobile } from "react-device-detect"
import Icon from "../../atoms/Icon"

interface Interface {
  data: NotificationInterface[]
}

const ToasterList = ({ data }: Interface) => {
  return (
    <ToasterListStyle
      onMouseLeave={() => isMobile ? undefined : dispatchHideNotifications()}
      onMouseOver={() => dispatchShowNotifications()}
    >
      <header>
        <Icon icon={MdClose} onClick={() => dispatchHideNotificationsNow()} />
      </header>
      <main>
        {data.map((data: NotificationInterface, index: number) =>
          <Toaster.Default {...data} key={index} index={index + 1} />
        )}
      </main>
    </ToasterListStyle>
  )
}

export default ToasterList