import { Row } from "../../components/molecules/Row"
import { RowProps } from "../../interfaces"
import { MdPix } from "react-icons/md";
import { theme } from "../../providers/theme";

const List = () => {
  const loop = Array.from({ length: 60 }, (_, i) => i + 1)
  const rowStyle: RowProps = {
    position: "sticky",
    top: "3.5rem",
    backgroundColor: theme.colorDefault.white,
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 2px",
  }

  return (
    <>
      {
        loop.map((i) =>
          <Row.Root key={i} rowStyle={i % 3 === 0 ? rowStyle : undefined}>
            <Row.Icon icon={MdPix} width={24} />
            <Row.Section>
              <Row.Text size="big"> Texto {i} </Row.Text>
              <Row.Title size="small"> Title {i} </Row.Title>
            </Row.Section>
            <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
              <Row.Text size="big"> Texto {i} </Row.Text>
              <Row.Title size="small"> Title {i} </Row.Title>
            </Row.Section>
            <Row.Icon icon={MdPix} width={24} onClick={() => console.log(1)} />
          </Row.Root>
        )
      }
    </>
  )
}

export default List