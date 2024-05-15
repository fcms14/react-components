import styled, { css } from 'styled-components'
import { SectionProps } from '../../../interfaces'

const Section = styled.section<SectionProps>`
  display: flex;
  flex-grow: 1;

  ${props => css`
    flex-direction: ${props?.flexDirection ?? "column"};

    justify-content: ${props?.justifyContent};
    align-items: ${props.alignItems};
    text-align: ${props.textalign};
    gap: ${props.gap};

    border-bottom: ${props.borderBotom ? `1px solid ${props.theme.colors.main.stroke}` : "undefined"};
    overflow-x: ${props.overflow ? "auto" : "undefined"};
    padding: ${props.padding ? `${props.theme.gap} ${props.theme.gap} 0` : undefined};
  `}
`

export default Section