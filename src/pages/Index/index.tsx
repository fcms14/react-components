import Caption from "../../components/atoms/Caption"
import Subtitle from "../../components/atoms/Subtitle"
import Text from "../../components/atoms/Text"
import Title from "../../components/atoms/Title"
import Auth from "../../templates/Auth"

const Index = () => {
  return (
    <Auth>
      <div style={{display: "flex"}}>
        <span>
          <Title>Título</Title>
          <Subtitle>Subtítulo</Subtitle>
          <Text>Texto</Text>
          <Caption size="big">Legenda</Caption>
        </span>
        <span>
          <h1>Título</h1>
          <h2>Subtítulo</h2>
          <p>Texto</p>
          <caption>Legenda</caption>
        </span>
      </div>
    </Auth>
  )
}

export default Index
