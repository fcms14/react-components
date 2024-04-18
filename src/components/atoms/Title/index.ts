import styled from 'styled-components'
import { ColorInterface, FontSizeInterface } from '../../../interfaces'

const fontsizes: FontSizeInterface = JSON.parse(import.meta.env.VITE_FONTSIZES)
const colors: ColorInterface = JSON.parse(import.meta.env.VITE_COLORS)

interface Props {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

const Title = styled.h1<Props>`
    font-size: ${props => fontsizes.title[props?.size ?? 'default']};
    color: ${props => colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default Title