import { Row } from "../molecules/Row"
import { RowProps } from "../../interfaces"

interface Item {
  title: string,
  icon: string,
  text: string
}

interface Interface {
  items: Item[]
}

const Menurows = ({ items }: Interface) => {
  const rowStyle: RowProps = {
    position: "sticky",
    top: "3.5rem",
    backgroundColor: "#FFFFFF",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 0px",
    marginBottom: "10px"
  }

  return (
    <>
      {
        items.map((i) =>
          <Row.Root rowStyle={rowStyle}>
            <Row.Icon icon={i.icon} />
            <Row.Section>
              <Row.Title size="small"> {i.title} </Row.Title>
              <Row.Text size="big"> {i.text} </Row.Text>
            </Row.Section>
          </Row.Root>
        )
      }
    </>
  )
}

export default Menurows