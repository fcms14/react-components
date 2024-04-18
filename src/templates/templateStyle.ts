import styled from 'styled-components'
import { ColorInterface, FontSizeInterface } from '../interfaces'

const colors: ColorInterface = JSON.parse(import.meta.env.VITE_COLORS)

interface Props {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

const TemplateStyle = styled.div<Props>`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    position: relative;

    > header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.75rem;
        position: sticky;
        top: 0;
        background-color: ${props => colors[props?.parent ?? 'header'][props?.element ?? 'fill']};
    }

    > main {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }

    > footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.625rem;
        position: sticky;
        bottom: 0;
        background-color: ${props => colors[props?.parent ?? 'header'][props?.element ?? 'fill']};
    }
`

export default TemplateStyle