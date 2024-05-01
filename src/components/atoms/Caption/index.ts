import styled from 'styled-components'

interface Props {
    size?: 'small' | 'default' | 'big'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

const Caption = styled.caption<Props>`
    font-size: ${props => props.theme.fontsizes.caption[props?.size ?? 'default']};
    color: ${props => props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'font']};
`

export default Caption