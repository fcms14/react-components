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
        <Header.Icon width={"22px"} icon="MdArrowBack" onClick={() => console.log(1)} />
        <Header.Title > Header </Header.Title>
        <Header.Icon width={"22px"} icon="MdClose" onClick={() => console.log(1)} />
        {/* <Header.Spacer /> */}
      </Header.Root>
      <main>
        {loop.map((i) =>
          <div
            key={i}
            style={i % 3 === 0
              ? { padding: `0 ${theme.padding.main}`, position: "sticky", top: "3.5rem", backgroundColor: "#FFFFFF", boxShadow: "0 2px 2px rgba(0, 0, 0, 0.25)" }
              : { padding: `0 ${theme.padding.main}`, }
            }
          >
            <Text key={i} size="biggest"> Texto {i} </Text>
          </div>
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
