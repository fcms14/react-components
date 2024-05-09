import styled from 'styled-components'
import { theme } from '../../../providers/theme'

interface Props {
  size?: string,
  noMargin?: boolean,
  noHeader?: boolean,
  theme: any
}

const Title = styled.h1<Props>`
    ${(props) => !props.noHeader && 'display: flex;'};
    ${(props) => !props.noHeader && 'align-items: center;'};
    ${(props) => !props.noHeader && 'gap: 0.5rem;'};
    font-family: InterBold;
    font-size: 1 rem;
    color: ${props => props.color || '#000' };
    ${(props) => props.noMargin && 'margin: 0;'};
`

export default Title