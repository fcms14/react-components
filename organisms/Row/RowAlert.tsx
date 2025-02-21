import { Row } from "../../molecules/Row"
import { theme } from "../../../providers/theme"
import { RowAlertStyle } from "../../molecules/Row/RowStyle"
import { FaInfoCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Link from "../../atoms/Link"

export interface RowCardInterface {
  text: string,
  path: string,
  title: string,
  rightLink: string
}

const RowAlert = ({ text, title, path, rightLink }: RowCardInterface) => {
  const navigate = useNavigate()

  return (
    <RowAlertStyle>
      <Row.Icon width={32} icon={FaInfoCircle} applyPadding />
      <Row.Section sectionStyle={{ flexDirection: "column", justifyContent: "space-between", alignItems: "left" }} >
        <Row.Title size="small"> {title} </Row.Title>
        <Row.Section sectionStyle={{ flexDirection: "row", justifyContent: "space-between", alignItems: "left" }} >
          <Row.Text size="small">  {text} </Row.Text>
          <div style={{ marginLeft: theme.radius }}>
            <Link onClick={() => navigate(path)}>
              <Row.Text size="small" color={theme.footer.active}>{rightLink}</Row.Text>
            </Link>
          </div>
        </Row.Section>
      </Row.Section>
    </RowAlertStyle>
  )
}

export default RowAlert