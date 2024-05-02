import Template from "../../templates/Template"
import Subtitle from "../../components/atoms/Subtitle"
import Text from "../../components/atoms/Text"
import { Header } from "../../components/molecules/Header"
import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../components/molecules/Row/RowStyle"
import Title from "../../components/atoms/Title"
// import Caption from "../../components/atoms/Caption"
// import Button from "../../components/atoms/Button"

const Index = () => {
  const loop = Array.from({ length: 60 }, (_, i) => i + 1)
  const rowStyle: RowProps = {
    position: "sticky",
    top: "3.5rem",
    backgroundColor: "#FFFFFF",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 2px",
  }

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
          <Row.Root key={i} rowStyle={i % 3 === 0 ? rowStyle : undefined}>
            <Row.Icon icon="Pix" />
            <Row.Section>
              <Text size="big"> Texto {i} </Text>
              <Title size="small"> Title {i} </Title>
            </Row.Section>
            <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
              <Text size="big"> Texto {i} </Text>
              <Title size="small"> Title {i} </Title>
            </Row.Section>
            <Row.Icon icon="Pix" onClick={() => console.log(1)} />
          </Row.Root>
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
