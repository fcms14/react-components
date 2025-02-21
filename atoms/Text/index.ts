import styled from 'styled-components'

export interface FontProps {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest',
    parent?: 'header' | 'main',
    element?: 'title' | 'font',
    active?: boolean,
    color?: string,
    cursor?: string,
    textAlign?: string,
    textWrap?: string,
}

const Text = styled.p<FontProps>`
    font-size: ${props => props.theme.fontsizes.text[props?.size ?? 'default']};
    color: ${props => props.color ?? props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
    cursor: ${props => props?.cursor};
    text-align: ${props => props?.textAlign};
    text-wrap: ${props => props?.textWrap};
    opacity: ${props => props?.active === false ? 0.5 : 1}
`

export default Text