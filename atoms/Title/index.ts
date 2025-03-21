import styled from 'styled-components'
import { FontProps } from '../Text'

const Title = styled.h1<FontProps>`
    font-family: "InterBold";
    font-size: ${props => props.theme.fontsizes.title[props?.size ?? 'default']};
    cursor: ${props => props?.cursor};
    color: ${props => props.color ?? props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'title']};
    text-wrap: ${props => props?.textWrap};
    opacity: ${props => props?.active === false ? 0.5 : 1}
`

export default Title