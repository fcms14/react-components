import styled from 'styled-components'

interface Props {
  width?: string
}

const HeaderSpacer = styled.div<Props>`
  width: ${props => props?.width ?? props.theme.padding.header};
`

export default HeaderSpacer