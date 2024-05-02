import Template from "../../templates/Template"
import Subtitle from "../../components/atoms/Subtitle"
import List from "./list"
import Head from "./head"

const Index = () => {
  return (
    <Template>
      <Head />
      <main>
        <List />
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