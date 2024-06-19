import styled, { css } from "styled-components";
import { theme } from "../../../providers/theme";

const BreadcrumbStyle = styled.header`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: ${theme.colorDefault.white};
    justify-content: space-between;
    
    padding: ${({ theme }) => `0 ${theme.padding.main}`};
    gap: ${({ theme }) => `${theme.gap}`};
`

export const BreadcrumbDivStyle = styled.div`

`
export default BreadcrumbStyle;
