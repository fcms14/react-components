import BreadcrumbStyle from "./BreadcrumbStyle"
import Icon from "../Icon"
import Title from "../Title"
import Subtitle from "../Subtitle"
import Text from "../Text"
import { MdArrowRight } from "react-icons/md"

interface Interface {
  paths: string[]
}

const Breadcrumb = ({ paths }: Interface) => {
  return (
    <BreadcrumbStyle>
      <Title> {paths.slice(0, 1)[0]}</Title>

      {paths.slice(1, 2)[0] && <>
        <Icon width={7} icon={MdArrowRight} color="#BE9E37" />
        <Subtitle> {paths.slice(1, 2)[0]} </Subtitle>
      </>}
      
      {paths.slice(2).map((text: string, i: number) => <span key={i}>
        <Icon width={7} icon={MdArrowRight} color="#BE9E37" />
        <Text> {text} </Text>
      </span>)}
    </BreadcrumbStyle>
  )
}

export default Breadcrumb