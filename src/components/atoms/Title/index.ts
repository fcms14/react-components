import styled from 'styled-components'

interface Props {
    size?: 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'biggest'
    parent?: 'header' | 'main'
    element?: 'title' | 'font'
}

const Title = styled.h1<Props>`
    font-family: "InterBold";
    font-size: ${props => props.theme.fontsizes.title[props?.size ?? 'default']};
    color: ${props => props.theme.colors[props?.parent ?? 'main'][props?.element ?? 'title']};
`

export default Title