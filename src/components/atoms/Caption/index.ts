import styled from 'styled-components'
import { CaptionProps } from '../../../interfaces'

const Caption = styled.p<CaptionProps>`
    font-size: ${props => props.theme.fontsizes.caption[props?.size ?? 'default']};
    color: ${props => props.color ?? props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default Caption