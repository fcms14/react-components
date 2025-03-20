import { Row } from "../../molecules/Row"
import { theme } from "../../../providers/theme"
import { RowAlertStyle } from "../../molecules/Row/RowStyle"
import { RiErrorWarningFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"

export interface RowAlertInterface {
  text: string,
  path: string,
  title: string,
  rightLink: string
}

const RowAlert = ({ text, title, path, rightLink }: RowAlertInterface) => {
  const navigate = useNavigate()

  return (
    <RowAlertStyle onClick={() => navigate(path)} style={{ cursor: 'pointer' }}>
      <Row.Icon width={32} icon={RiErrorWarningFill} applyPadding />
      <Row.Section sectionStyle={{ flexDirection: "column", justifyContent: "space-between", alignItems: "left" }} >
        <Row.Title size="small"> {title} </Row.Title>
        <Row.Text size="small">
          {text}
          <span style={{ color: theme.footer.active, fontWeight: 700 }}> {rightLink} </span>
        </Row.Text>
      </Row.Section>
    </RowAlertStyle>
  )
}

export default RowAlert