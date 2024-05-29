import styled, { css } from 'styled-components'
import { SectionProps } from '../../../interfaces'

const Section = styled.section<SectionProps>`
  display: flex;
  flex-grow: 1; 
 
  ${props => css`
    flex-direction: ${props?.flexDirection ?? "column"};

    justify-content: ${props?.justifyContent};
    align-items: ${props.alignItems};
    gap: ${props.gap};
    text-align: ${props.textalign};

    border-bottom: ${props.borderBotom ? `1px solid ${props.theme.colors.main.stroke}` : "undefined"};
  `}
`

export default Section