import styled from 'styled-components'

interface Props {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

const Subtitle = styled.h2<Props>`
    font-size: ${props => props.theme.fontsizes.subtitle[props?.size ?? 'default']};
    color: ${props => props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'title']};
`

export default Subtitle