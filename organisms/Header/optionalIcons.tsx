import { IconComponentInterface } from "../../atoms/Icon";
import { HeaderProps } from "../../atoms/Header";
import { theme } from "../../../providers/theme";
import { Header } from "../../molecules/Header"
import IconOrMenu from "../../atoms/IconOrMenu/index";
import { DropDownItemInterface } from "../../atoms/DropDown";
import Notification from '../../atoms/Notification';
import Toaster from '../../atoms/Toaster';
import { dispatchCloseNotifications, dispatchHideNotifications, dispatchRemoveNotification, dispatchShowNotifications } from '../../../features/toaster/toasterDispatcher.js';
import { useSelector } from "react-redux";
import { RootState } from '../../../store/index.js';

export interface HeaderRightIconInterface extends IconComponentInterface {
  text: string
}

export interface HeaderOptionalIconsInterface {
  text: string,
  leftIcon?: IconComponentInterface
  rightIcon?: HeaderRightIconInterface
  iconBefore?: boolean
  actions?: DropDownItemInterface[]
}

const HeaderOptionalIcons = ({ text, leftIcon, rightIcon, iconBefore, actions }: HeaderOptionalIconsInterface) => {
  const iconWidth = leftIcon?.width ?? rightIcon?.width ?? Number(theme.fontsizes.title.big.match(/\d+/))
  const size = `${(iconWidth) + (Number(theme.padding.icon.match(/\d+/)) * 2)}px`;
  const toaster = useSelector((state: RootState) => state.toaster);
  const headerStyle: HeaderProps | undefined = iconBefore ? { flexDirection: "row-reverse" } : undefined
  const notifications = toaster.notifications.slice(1)


  return (
    <Header.Root headerStyle={{ ...headerStyle }}>
      {notifications.length > 0 
      && text === "Menu" 
      && <Notification onClick={dispatchShowNotifications} />}
      {toaster.show && <Toaster onMouseLeave={dispatchHideNotifications} onMouseOver={dispatchShowNotifications} onClick={dispatchCloseNotifications} onRemove={dispatchRemoveNotification} data={notifications} />}
      {leftIcon ? <Header.Icon {...leftIcon} width={iconWidth} /> : <Header.Spacer width={size} />}
      <Header.Title parent="header"> {text} </Header.Title>
      {rightIcon
        ? <Header.Icon {...rightIcon} width={iconWidth} />
        : (actions
          ? <IconOrMenu actions={actions} iconColor={theme.colors.header.icon} />
          : <Header.Spacer width={size} />
        )
      }
    </Header.Root>
  )
}

export default HeaderOptionalIcons