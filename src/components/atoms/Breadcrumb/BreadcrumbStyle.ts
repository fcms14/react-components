import styled, { css } from "styled-components";

const BreadcrumbStyle = styled.header`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #FFFFFF;
    
    padding: ${({ theme }) => `0 ${theme.padding.main}`};
    gap: ${({ theme }) => `${theme.gap}`};
`
export default BreadcrumbStyle;
