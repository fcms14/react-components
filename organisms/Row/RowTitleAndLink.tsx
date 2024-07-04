import { useNavigate } from "react-router-dom"
import Link from "../../atoms/Link"
import { Row } from "../../molecules/Row"

export interface Interface {
  leftTitle: string,
  rightLink: string,
  path: string,
  color?: string,
  tooltip?: string,
}

const RowTitleAndLink = ({ leftTitle, rightLink, path, color, tooltip }: Interface) => {
  const navigate = useNavigate()

  return (
    <Row.HeaderRoot>
      <Row.Section>
        <Row.Title title={tooltip} size="small">{leftTitle}</Row.Title>
      </Row.Section>
      <Row.Section sectionStyle={{ alignItems: "flex-end" }}>
        <Link onClick={() => navigate(path)}>
          <Row.Text color={color}>{rightLink}</Row.Text>
        </Link>
      </Row.Section>
    </Row.HeaderRoot>
  )
}

export default RowTitleAndLink