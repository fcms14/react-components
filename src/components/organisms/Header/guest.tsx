import Header from "../../atoms/Header"

interface Interface {

}

const HeaderGuest = ({ }: Interface) => {
  return (
    <Header>
      <img src={import.meta.env.VITE_WHITE_LABEL_LOGO_GUEST} />
    </Header>
  )
}

export default HeaderGuest