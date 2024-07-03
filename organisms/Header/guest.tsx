import { isMobile } from "react-device-detect"
import Header from "../../atoms/Header"

interface Interface {

}

const HeaderGuest = ({ }: Interface) => {
  return (
    <Header>
      <img style={{ width: isMobile ? '7rem' : '9rem' }} src={import.meta.env.VITE_WHITE_LABEL_LOGO_VERTICAL} />
    </Header>
  )
}

export default HeaderGuest