import styled from 'styled-components'

export interface SubtextProps {
    size?: 'small' | 'default' | 'big',
    parent?: 'header' | 'main',
    element?: 'title' | 'font',
    color?: string,
}

const Subtext = styled.p<SubtextProps>`
    font-size: ${props => props.theme.fontsizes.subtext[props?.size ?? 'default']};
    color: ${props => props.color ?? props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default Subtext