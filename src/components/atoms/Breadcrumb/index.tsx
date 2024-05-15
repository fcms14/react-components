import BreadcrumbStyle from "./BreadcrumbStyle"
import Icon from "../Icon"
import Title from "../Title"
import Subtitle from "../Subtitle"
import Text from "../Text"
import { FaAngleRight } from "react-icons/fa";
import Span from "../Span"

interface Interface {
  paths: string[]
}

const Breadcrumb = ({ paths }: Interface) => {
  return (
    <BreadcrumbStyle>
      <Title> {paths.slice(0, 1)[0]}</Title>

      {paths.slice(1, 2)[0] && <>
        <Icon width={20} icon={FaAngleRight} color="#BE9E37" />
        <Subtitle> {paths.slice(1, 2)[0]} </Subtitle>
      </>}

      {paths.slice(2).map((text: string, i: number) => <Span key={i}>
        <Icon width={20} icon={FaAngleRight} color="#BE9E37" />
        <Text> {text} </Text>
      </Span>)}
    </BreadcrumbStyle>
  )
}

export default Breadcrumb