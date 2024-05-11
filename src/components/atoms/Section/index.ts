import styled, { css } from 'styled-components'
import { SectionProps } from '../../../interfaces'
import { theme } from "../../../providers/theme"

const Section = styled.section<SectionProps>`
    display: flex;
    flex-grow: 1;
    ${props => css`
      flex-direction: ${props?.flexDirection ?? "column"};
      justify-content: ${props?.justifyContent};
      align-items: ${props.alignItems};
      text-align: ${props.textalign};
      gap: ${props.gap}; 
      border-bottom:  ${props.borderBotom ? "1px solid #D6D6D6" : "undefined"};
      ${props.overflow ? "overflow-x: auto;" : "undefined"};
      ${props.padding ? "padding: 8px 0px;" : css`padding: ${`${theme.gap} ${theme.gap} 0 `};`}         
                    
  ` }  
`

export default Section