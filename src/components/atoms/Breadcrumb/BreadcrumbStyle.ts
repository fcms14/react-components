import styled, { css } from "styled-components";

const BreadcrumbStyle = styled.header`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => `${theme.gap}`};
`
export default BreadcrumbStyle;
