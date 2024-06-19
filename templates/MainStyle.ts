import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

interface Props {
    isGuest?: boolean
}

const MainStyle = styled.div<Props>`
    display: flex;
    flex-direction: column;
    
    // position: relative;

    padding: ${({ isGuest }) => (isGuest && isMobile) ? "10vw" : undefined};

    form, 
    form > main {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
    
    > form > main {
        justify-content: space-between;

        > section > div {
            display: flex;
        }
    }    

    > form > footer {
        display: flex;
        flex-direction: column;
        padding-bottom: ${({ theme }) => theme.padding.main};
    }
`

export default MainStyle