import { Row } from "../../molecules/Row"
import { theme } from "../../../providers/theme"
import { RowProps } from "../../molecules/Row/RowStyle"
import { IconComponentInterface } from "../../atoms/Icon"

export interface MenuRowInterface {
  title: string,
  text: string,
  icon: IconComponentInterface,
  active?: boolean,
  onClick?: () => void,
}

interface Interface {
  items: MenuRowInterface[]
}

const MenuList = ({ items }: Interface) => {
  const rowStyle: RowProps = {
    borderBottom: `${theme.border} ${theme.colors.main.stroke}`,
  }

  return (
    <>{items.map(({ icon, title, text, onClick, active = true}: MenuRowInterface, index: number) =>
      <Row.Root rowStyle={rowStyle} key={index} onClick={onClick} >
        <Row.Icon {...icon} />
        <Row.Section>
          <Row.Title active={active} size="small"> {title} </Row.Title>
          <Row.Text active={active}  size="big"> {text} </Row.Text>
        </Row.Section>
      </Row.Root>
    )}</>
  )
}

export default MenuList