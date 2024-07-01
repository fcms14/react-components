import { Row } from "../../molecules/Row";
import { theme } from "../../../providers/theme";
import { IconComponentInterface } from "../../atoms/Icon";

export interface RowListInterface {
  rightTitle: string,
  leftTitle: string,
  rightText: string,
  leftIcon: IconComponentInterface,
  rightIcon: IconComponentInterface,
  leftText: string,
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
          <Row.Icon {...leftIcon} />
          <Row.Section>
            <Row.Text>{leftText}</Row.Text>
            <Row.Subtitle>{leftTitle}</Row.Subtitle>
          </Row.Section>
          <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
            <Row.Text textAlign="right">{rightText}</Row.Text>
            <Row.Subtitle>{rightTitle}</Row.Subtitle>
          </Row.Section>
          <Row.Icon {...rightIcon} />
        </Row.Root>
      ))}
    </>
  );
}

export default RowList