import styled from 'styled-components'
import { CaptionProps } from '../../../interfaces'

const Caption = styled.caption<CaptionProps>`
    font-size: ${props => props.theme.fontsizes.caption[props?.size ?? 'default']};
    color: ${props => props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default Caption