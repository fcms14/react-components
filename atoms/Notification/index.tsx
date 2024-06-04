import { MdNotifications } from "react-icons/md"
import Icon from "../Icon"
import { theme } from "../../../providers/theme"
import NotificationStyle from "./NotificationStyle"

export interface NotificationInterface {
    onClick: () => void
}

const Notification = ({ onClick }: NotificationInterface) => {
    return (
        <NotificationStyle>
            <Icon
                icon={MdNotifications}
                color={theme.colors.header.font}
                width={Number(theme.fontsizes.title.bigger.match(/\d+/))}
                onClick={onClick}
            />
        </NotificationStyle>
    )
}

export default Notification