import Template from "../../templates/Template"
import Subtitle from "../../components/atoms/Subtitle"
import Text from "../../components/atoms/Text"
import { Header } from "../../components/atoms/Header"
import { theme } from "../../providers/theme"
// import Title from "../../components/atoms/Title"
// import Caption from "../../components/atoms/Caption"
// import Button from "../../components/atoms/Button"

const Index = () => {
  const loop = Array.from({ length: 60 }, (_, i) => i + 1)

  return (
    <Template>
      <Header.Root>
        <Header.Icon icon="MdArrowBack" width={16} color={theme.colors.header.icon} onClick={() => console.log(1)} />
        <Header.Title> Header </Header.Title>
        <Header.Spacer width="32px"></Header.Spacer>
      </Header.Root>
      <main>
        {loop.map((i) =>
          <Text
            key={i}
            size="biggest"
            style={i % 3 === 0
              ? { position: "sticky", top: "2.75rem", backgroundColor: "#FFFFFF", boxShadow: "0 2px 2px rgba(0, 0, 0, 0.25)" }
              : undefined}>
            Texto {i}
          </Text>
        )}
        {/* <Button
          icon="search"
          iconColor="white"
          flat="true"
          backgroundColor="#BE9E37"
          iconPosition="right"
          textColor="#fff"
        >
          Button
        </Button> */}
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </Template>
  )
}

export default Index
