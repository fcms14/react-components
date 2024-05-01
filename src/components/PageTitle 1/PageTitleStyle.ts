import styled from 'styled-components'

interface Props {
    titleAlign?: string
}

const PageTitleStyle = styled.div<Props>`
    > header {
        display: flex;
        align-items: center;

        > h1 {
            flex-grow: 1;
            text-align: ${props => props.titleAlign ? props.titleAlign : "center"};
        }
    }

    > section {
        min-height: 0.5rem;
    }
    
    > main {
        margin-top: 1rem;
    }
`

export default PageTitleStyle