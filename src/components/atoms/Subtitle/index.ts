import styled from 'styled-components'
import { ColorInterface, FontSizeInterface } from '../../../interfaces'

const fontsizes: FontSizeInterface = JSON.parse(import.meta.env.VITE_FONTSIZES)
const colors: ColorInterface = JSON.parse(import.meta.env.VITE_COLORS)

interface Props {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

const Subtitle = styled.h2<Props>`
    font-size: ${props => fontsizes.subtitle[props?.size ?? 'default']};
    color: ${props => colors[props?.parent ?? 'main'][props?.element ?? 'title']};
`

export default Subtitle