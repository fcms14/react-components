import { MenuRowInterface, RowProps } from "../../../interfaces"
import { Row } from "../../molecules/Row"
import { theme } from "../../../providers/theme"

interface Interface {
  items: MenuRowInterface[]
}

const MenuList = ({ items }: Interface) => {
  const rowStyle: RowProps = {
    borderBottom: `1px solid ${theme.colors.main.stroke}`,
  }

  return (
    <>{items.map(({ icon, iconSize, title, text, onClick }: MenuRowInterface, index: number) =>
      <Row.Root rowStyle={rowStyle} key={index} onClick={onClick} >
        <Row.Icon width={iconSize} icon={icon} />
        <Row.Section>
          <Row.Title size="small"> {title} </Row.Title>
          <Row.Text size="big"> {text} </Row.Text>
        </Row.Section>
      </Row.Root>
    )}</>
  )
}

export default MenuList