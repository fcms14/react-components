import { IconType } from "react-icons"
import { MenuRowInterface, RowProps } from "../../../interfaces"
import { Row } from "../../molecules/Row"
import { theme } from "../../../providers/theme"

interface Interface {
  items: MenuRowInterface[]
}

const Menurows = ({ items }: Interface) => {
  const rowStyle: RowProps = {
    borderBottom: `1px solid ${theme.colors.main.stroke}`,
  }

  return (
    <>{items.map((item: MenuRowInterface, index: number) =>
      <Row.Root rowStyle={rowStyle} key={index}>
        <Row.Icon width={item.iconSize} icon={item.icon} />
        <Row.Section>
          <Row.Title size="small"> {item.title} </Row.Title>
          <Row.Text size="big"> {item.text} </Row.Text>
        </Row.Section>
      </Row.Root>
    )}</>
  )
}

export default Menurows