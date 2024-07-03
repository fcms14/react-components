import Header from "../../atoms/Header"

interface Interface {

}

const HeaderGuest = ({ }: Interface) => {
  return (
    <Header>
      <img width={140} height={148} src={import.meta.env.VITE_WHITE_LABEL_LOGO_VERTICAL} />
    </Header>
  )
}

export default HeaderGuest