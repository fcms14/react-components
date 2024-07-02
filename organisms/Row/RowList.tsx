import { Row } from "../../molecules/Row";
import { theme } from "../../../providers/theme";
import { IconComponentInterface } from "../../atoms/Icon";
import HeaderSpacer from "../../molecules/Header/HeaderSpacer";

export interface RowListInterface {
  leftText?: string,
  rightText?: string,
  rightTitle?: string,
  leftTitle?: string,
  leftIcon?: IconComponentInterface,
  rightIcon?: IconComponentInterface,
  onClick?: () => void,
  observer?: ((instance: HTMLDivElement | null) => void)
}

export interface Interface {
  items: RowListInterface[]
}

const RowList = ({ items }: Interface) => {
  return (
    <>
      {items.map(({ rightTitle, rightText, leftTitle, leftText, leftIcon, rightIcon, onClick, observer }, key: number) => (
        <Row.Root key={key} rowStyle={{ borderBottom: `1px solid ${theme.colors.main.stroke}` }} observer={observer}>
          {leftIcon ? <Row.Icon {...leftIcon} /> : <HeaderSpacer width="16px" />}
          <Row.Section>
            <Row.Text>{leftText}</Row.Text>
            <Row.Subtitle>{leftTitle}</Row.Subtitle>
          </Row.Section>
          <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
            <Row.Text textAlign="right">{rightText}</Row.Text>
            <Row.Subtitle>{rightTitle}</Row.Subtitle>
          </Row.Section>
          {rightIcon ? <Row.Icon {...rightIcon} /> : <HeaderSpacer width="16px" />}
        </Row.Root>
      ))}
    </>
  );
}

export default RowList