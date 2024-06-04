import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

interface Props {
    isGuest?: boolean
}

const BodyDefaultStyle = styled.div<Props>`
    display: flex;
    flex-direction: column;
    min-height: ${({ isGuest }) => (!isGuest || isMobile) ? "100dvh" : "100%"};
    position: relative;

    > main {
        padding: ${({ isGuest }) => (isGuest && isMobile) ? "10vw" : undefined};
    }

    > main,
    > main > form, 
    > main > form > main {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
    
    > main > form > main {
        justify-content: space-between;

        > section > div {
            display: flex;
        }
    }    

    > main > form > footer {
        display: flex;
        flex-direction: column;
        padding-bottom: ${({ theme }) => theme.padding.main};
    }

    > footer {
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        z-index: 2;
        bottom: 0;
        padding-top: ${({ theme }) => theme.padding.header};
        padding-bottom: ${({ theme }) => theme.padding.header};
        background-color: ${({ theme }) => theme.footer.fill};
    }
`

export default BodyDefaultStyle