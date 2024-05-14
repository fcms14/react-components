import { Row } from "../../molecules/Row"
import RowSection from "../../molecules/Row/RowSection"

interface Interface {
  text: [string, string, string, string]
  color: [string, string, string, string]
  borderBotom: boolean
  onClick?: () => void
}

const FourColumnRow = ({ text, borderBotom, color, onClick }: Interface) => {
  return (
    <Row.Root>
      <RowSection sectionStyle={{ flexDirection: "row", textalign: "right", borderBotom }}>
        <RowSection>
          <Row.Text onClick={onClick} color={color[0]}>{text[0]}</Row.Text>
        </RowSection>
        <RowSection>
          <Row.Text onClick={onClick} color={color[1]}>{text[1]}</Row.Text>
        </RowSection>
      </RowSection>
      <RowSection sectionStyle={{ flexDirection: "row", textalign: "left", borderBotom }}>
        <RowSection>
          <Row.Text onClick={onClick} color={color[2]}>{text[2]}</Row.Text>
        </RowSection>
        <RowSection>
          <Row.Text onClick={onClick} color={color[3]}>{text[3]}</Row.Text>
        </RowSection>
      </RowSection>
    </Row.Root>
  )
}
export default FourColumnRow