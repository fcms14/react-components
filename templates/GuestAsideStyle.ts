import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

const GuestAsideStyle = styled.aside`
    display: ${isMobile ? "none" : "flex"};
    background-color: ${({ theme }) => theme.colors.header.fill};
    height: 100dvh;
    flex-grow: 1;
`

export default GuestAsideStyle