import { NotificationInterface } from "../../../interfaces"
import ToasterStyle from "./ToasterStyle"
import { MdClose } from "react-icons/md"
import { dispatchHideNotifications, dispatchCloseNotifications, dispatchShowNotifications } from "../../../features/toaster/toasterDispatcher"
import { isMobile } from "react-device-detect"
import Icon from "../Icon"
import NotificationCard from "../NotificationCard"

interface Interface {
  data: NotificationInterface[]
}

const Toaster = ({ data }: Interface) => {
  return (
    <ToasterStyle
      onMouseLeave={() => isMobile ? undefined : dispatchHideNotifications()}
      onMouseOver={() => dispatchShowNotifications()}
    >
      <header>
        <Icon icon={MdClose} onClick={() => dispatchCloseNotifications()} />
      </header>
      <main>
        {data.map((notification: NotificationInterface, index: number) =>
          <NotificationCard {...notification} key={index} index={index + 1} />
        )}
      </main>
    </ToasterStyle>
  )
}

export default Toaster