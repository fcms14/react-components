import Template from "../../templates/Template"
import Caption from "../../components/atoms/Caption"
import Subtitle from "../../components/atoms/Subtitle"
import Text from "../../components/atoms/Text"
import Title from "../../components/atoms/Title"
// import Button from "../../components/atoms/Button"

const Index = () => {
  const loop = Array.from({ length: 60 }, (_, i) => i + 1)

  return (
    <Template>
      <header>
        <Title size="big" parent="header" element="title">Título</Title>
      </header>
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
