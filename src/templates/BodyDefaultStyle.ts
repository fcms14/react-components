import styled from 'styled-components'

const BodyDefaultStyle = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    position: relative;

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
            flex-wrap: wrap;
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
        background-color: ${({ theme }) => theme.footer.fill};
    }
`

export default BodyDefaultStyle