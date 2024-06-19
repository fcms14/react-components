import BreadcrumbStyle from "./BreadcrumbStyle"
import Icon from "../Icon"
import Title from "../Title"
import Subtitle from "../Subtitle"
import Text from "../Text"
import { FaAngleRight } from "react-icons/fa";
import Span from "../Span"
import { theme } from "../../../providers/theme"
import { useNavigate } from "react-router-dom"

export interface BreadCrumbPathInterface {
  path: string,
  label: string
}

interface Interface {
  paths: BreadCrumbPathInterface[]
}

const Breadcrumb = ({ paths }: Interface) => {
  const navigate = useNavigate()

  return (
    <BreadcrumbStyle>
      <Title cursor="pointer" onClick={() => navigate(paths.slice(0, 1)[0].path)}> {paths.slice(0, 1)[0].label}</Title>

      {paths.slice(1, 2)[0] && <>
        <Icon width={20} icon={FaAngleRight} color={theme.colors.main.icon} />
        <Subtitle cursor="pointer" onClick={() => navigate(paths.slice(1, 2)[0].path)}> {paths.slice(1, 2)[0].label} </Subtitle>
      </>}

      {paths.slice(2).map(({ path, label }: BreadCrumbPathInterface, i: number) => <Span key={i}>
        <Icon width={20} icon={FaAngleRight} color={theme.colors.main.icon} />
        <Text cursor="pointer" onClick={() => navigate(path)}> {label} </Text>
      </Span>)}
    </BreadcrumbStyle>
  )
}

export default Breadcrumb