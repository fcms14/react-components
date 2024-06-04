import styled from 'styled-components'
import { FontProps } from '../Text'

const Subtitle = styled.h2<FontProps>`
    font-family: "InterBold";
    font-size: ${props => props.theme.fontsizes.subtitle[props?.size ?? 'default']};
    color: ${props => props.color ?? props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'title']};
`

export default Subtitle