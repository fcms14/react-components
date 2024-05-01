import styled from 'styled-components'

interface Props {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

const Text = styled.p<Props>`
    font-size: ${props => props.theme.fontsizes.text[props?.size ?? 'default']};
    color: ${props => props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default Text