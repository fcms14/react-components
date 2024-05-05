import { MdNotifications } from "react-icons/md"
import Icon from "../Icon"
import { theme } from "../../../providers/theme"
import NotificationStyle from "./NotificationStyle"
import { dispatchShowNotifications } from "../../../features/toaster/toasterDispatcher"

interface Interface {

}

const Notification = ({ }: Interface) => {
    return (
        <NotificationStyle>
            <Icon
                icon={MdNotifications}
                color={theme.colors.header.font}
                width={Number(theme.fontsizes.title.bigger.match(/\d+/))}
                onClick={() => dispatchShowNotifications()}
            />
        </NotificationStyle>
    )
}

export default Notification