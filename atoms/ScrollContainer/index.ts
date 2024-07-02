import styled, { css } from "styled-components";

const ScrollContainer = styled.section`
  overflow-y: auto;
  height: 300px;
  position: relative;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.main.stroke};
    border-radius: ${theme.radius};
    margin: ${theme.padding.main};
  `};

`

export default ScrollContainer