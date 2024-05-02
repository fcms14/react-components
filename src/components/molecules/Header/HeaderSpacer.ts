import styled from 'styled-components'

interface Props {
    width?: string
  }

const HeaderSpacer = styled.div<Props>`
    width: ${props => props?.width ?? "32px"};
`

export default HeaderSpacer