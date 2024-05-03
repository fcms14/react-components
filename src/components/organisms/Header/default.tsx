import { Header } from "../../molecules/Header"

interface Interface {
  text: string,
}

const HeaderDefault = ({ text }: Interface) => {
  return (
    <Header.Root headerStyle={{ justifyContent: "center" }}>
      <Header.Title parent="header"> {text} </Header.Title>
    </Header.Root>
  )
}

export default HeaderDefault