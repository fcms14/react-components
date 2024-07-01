import BreadcrumbStyle, { BreadcrumbDivStyle } from "./BreadcrumbStyle"
import Icon from "../Icon"
import Title from "../Title"
import Subtitle from "../Subtitle"
import Text from "../Text"
import { FaAngleRight } from "react-icons/fa";
import Span from "../Span"
import { theme } from "../../../providers/theme"
import { useNavigate } from "react-router-dom"
import { HeaderRightIconInterface } from "../../organisms/Header/optionalIcons"
import { Button } from "../../organisms/Button"
import { DropDownItemInterface } from "../DropDown"
import Action from "../Action/index"

export interface BreadCrumbPathInterface {
  path: string,
  label: string
}

interface Interface {
  paths: BreadCrumbPathInterface[]
  rightIcon?: HeaderRightIconInterface
  actions?: DropDownItemInterface[]
}

const Breadcrumb = ({ paths, rightIcon, actions }: Interface) => {
  const navigate = useNavigate()

  return (
    <BreadcrumbStyle>
      <BreadcrumbDivStyle>
        <Title cursor="pointer" onClick={() => navigate(paths.slice(0, 1)[0].path)}> {paths.slice(0, 1)[0].label}</Title>

        {paths.slice(1, 2)[0] && <>
          <Icon width={20} icon={FaAngleRight} color={theme.colors.main.icon} />
          <Subtitle cursor="pointer" onClick={() => navigate(paths.slice(1, 2)[0].path)}> {paths.slice(1, 2)[0].label} </Subtitle>
        </>}

        {paths.slice(2).map(({ path, label }: BreadCrumbPathInterface, i: number) => <Span key={i}>
          <Icon width={20} icon={FaAngleRight} color={theme.colors.main.icon} />
          <Text cursor="pointer" onClick={() => navigate(path)}> {label} </Text>
        </Span>)}
      </BreadcrumbDivStyle>
      {actions && <Action actions={actions} />}
      {rightIcon && rightIcon.onClick &&
        <Button.Small
          icon={rightIcon.icon}
          onClick={rightIcon.onClick}
          text={rightIcon.text}
          buttonStyle={{ active: true, small: true, flexGrow: 0 }}
        />
      }
    </BreadcrumbStyle>
  )
}

export default Breadcrumb