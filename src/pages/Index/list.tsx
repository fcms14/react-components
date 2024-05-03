import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../interfaces"

const List = () => {
  const loop = Array.from({ length: 60 }, (_, i) => i + 1)
  const rowStyle: RowProps = {
    position: "sticky",
    top: "3.5rem",
    backgroundColor: "#FFFFFF",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 2px",
  }

  return (
    <>
      {
        loop.map((i) =>
          <Row.Root key={i} rowStyle={i % 3 === 0 ? rowStyle : undefined}>
            <Row.Icon icon="Pix" />
            <Row.Section>
              <Row.Text size="big"> Texto {i} </Row.Text>
              <Row.Title size="small"> Title {i} </Row.Title>
            </Row.Section>
            <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
              <Row.Text size="big"> Texto {i} </Row.Text>
              <Row.Title size="small"> Title {i} </Row.Title>
            </Row.Section>
            <Row.Icon icon="Pix" onClick={() => console.log(1)} />
          </Row.Root>
        )
      }
    </>
  )
}

export default List