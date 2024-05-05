import { MdNotifications } from "react-icons/md"
import Icon from "../Icon"
import { theme } from "../../../providers/theme"
import NotificationStyle from "./NotificationStyle"

interface Interface {

}

const Notification = ({ }: Interface) => {
    return (
        <NotificationStyle>
            <Icon
                icon={MdNotifications}
                color={theme.colors.header.font}
                width={Number(theme.fontsizes.title.bigger.match(/\d+/))}
            />
        </NotificationStyle>
    )
}

export default Notification