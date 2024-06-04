import ToasterStyle from "./ToasterStyle"
import { MdClose } from "react-icons/md"
import { isMobile } from "react-device-detect"
import Icon from "../Icon"
import NotificationCard, { NotificationInterface } from "../NotificationCard"

export interface ToasterInterface {
  data: NotificationInterface[]
  onMouseLeave: () => void
  onMouseOver: () => void
  onClick: () => void
  onRemove: (index: number) => void
}

const Toaster = ({ data, onMouseLeave, onMouseOver, onClick, onRemove }: ToasterInterface) => {
  return (
    <ToasterStyle
      onMouseLeave={() => isMobile ? undefined : onMouseLeave()}
      onMouseOver={() => onMouseOver()}
    >
      <header>
        <Icon icon={MdClose} onClick={() => onClick()} />
      </header>
      <main>
        {data.map((notification: NotificationInterface, index: number) =>
          <NotificationCard {...notification} key={index} index={index + 1} onClick={onRemove} />
        )}
      </main>
    </ToasterStyle>
  )
}

export default Toaster