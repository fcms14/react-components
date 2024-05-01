import styled from "styled-components";
import LinkInterface from "./LinkInterface";
import ResetTheme from "../../../providers/theme";

const Link = styled.a<LinkInterface>`
  ${props => props.full && `
    display: block;
    width: 100%;
    padding: 0.75rem 1.75rem;
  `}
  ${props => props.fullMd && `
    display: block;
    width: 100%;
    padding: 0.5rem 3rem;
  `}
  color    : ${(props) => props.color || ResetTheme.colors.PRIMARY[1000]};
  font-size: ${(props) => ResetTheme.fontSizes.text[props.size ?? "sm"]};
  cursor   : ${(props) => props.textDecoration === "none" ? "default" : "pointer"};
  &:hover {
    text-decoration: ${(props) => props.textDecoration || "underline"};
    cursor: ${(props) => props?.cursor ?? `pointer` };
  }
`;

export default Link;
