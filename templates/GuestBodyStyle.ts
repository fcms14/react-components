import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

const GuestBodyStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: fit-content;
    width: ${isMobile ? undefined : "40dvw"};
`

export default GuestBodyStyle