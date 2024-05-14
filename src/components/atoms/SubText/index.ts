import styled from 'styled-components'
import { SubTextProps } from '../../../interfaces'

const SubText = styled.p<SubTextProps>`
    font-size: ${props => props.theme.fontsizes.subText[props?.size ?? 'default']};
    color: ${props => props.color ?? props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default SubText