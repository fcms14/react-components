import styled from 'styled-components'

export interface RowProps {
    justifyContent?: string
    position?: string
    top?: string
    backgroundColor?: string
    boxShadow?: string
}

const RowStyle = styled.div<RowProps>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.gap};
    justify-content: ${props => props?.justifyContent ?? "space-between"};

    padding: ${({ theme }) => `${theme.gap} ${theme.padding.main}`};

    position: ${props => props?.position};
    top: ${props => props?.top};
    background-color: ${props => props?.backgroundColor};
    box-shadow: ${props => props?.boxShadow};
`

export default RowStyle