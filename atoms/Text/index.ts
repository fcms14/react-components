import styled from 'styled-components'

export interface FontProps {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest',
    parent?: 'header' | 'main',
    element?: 'title' | 'font',
    color?: string,
    cursor?: string,
    textAlign?: string,
}

const Text = styled.p<FontProps>`
    font-size: ${props => props.theme.fontsizes.text[props?.size ?? 'default']};
    color: ${props => props.color ?? props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
    cursor: ${props => props?.cursor};
    text-align: ${props => props.textAlign};
`

export default Text