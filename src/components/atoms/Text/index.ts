import styled from 'styled-components'
import { FontProps } from '../../../interfaces'

const Text = styled.p<FontProps>`
    font-size: ${props => props.theme.fontsizes.text[props?.size ?? 'default']};
    color: ${props => props.color ?? props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default Text