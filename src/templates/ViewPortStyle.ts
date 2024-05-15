import styled from 'styled-components'

const ViewPortStyle = styled.div`
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
    }

    > footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.625rem;
        position: sticky;
        bottom: 0;
        background-color: ${({ theme }) => theme.footer.fill};
    }
`

export default ViewPortStyle