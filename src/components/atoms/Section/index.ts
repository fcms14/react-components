import styled, { css } from 'styled-components'
import { SectionProps } from '../../../interfaces'
import { moveDown } from '../Avatar/AvatarStyle'

const Section = styled.section<SectionProps>`
  display: flex;

  ${props => props.animation && css `
    :hover {
      > div {
        animation: ${moveDown} 1s ease-in-out infinite;
      }
    }
  `}
  
  ${props => css`
    flex-grow: ${props?.flexGrow ?? "1"};
    flex-direction: ${props?.flexDirection ?? "column"};

    justify-content: ${props?.justifyContent};
    align-items: ${props.alignItems};
    gap: ${props.gap};
    text-align: ${props.textalign};

    border-bottom: ${props.borderBotom ? `1px solid ${props.theme.colors.main.stroke}` : "undefined"};
  `}
`

export default Section