import styled, { css } from "styled-components";

const BreadcrumbStyle = styled.header`
background-color: #fff;
position: sticky;
top: 1.5 rem;
z-index: 1;
margin: 0.5rem;
margin-left: 1rem;

::before {
    content: '';
    position: absolute;
    bottom: -0px;
    left : -1.5rem;
    right:-1.5rem'};
    height: calc(100% +  1.5 rem);
    background-color: #fff;
    z-index: -1;
}

`
export default BreadcrumbStyle;
