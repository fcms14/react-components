import styled from 'styled-components'
import { ColorInterface, FontSizeInterface } from '../../../interfaces'

const fontsizes: FontSizeInterface = JSON.parse(import.meta.env.VITE_FONTSIZES)
const colors: ColorInterface = JSON.parse(import.meta.env.VITE_COLORS)

interface Props {
    size?: 'small' | 'default' | 'big'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

const Caption = styled.caption<Props>`
    font-size: ${props => fontsizes.caption[props?.size ?? 'default']};
    color: ${props => colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default Caption