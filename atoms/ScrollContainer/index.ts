import styled, { css } from "styled-components";

interface Props {
  height?: string
}

const ScrollContainer = styled.section<Props>`
  overflow-y: auto;
  position: relative;
  flex-grow: 1;
  
  ${({ theme, height }) => css`
    max-height: ${height ?? "300px"};
    border: 1px solid ${theme.colors.main.stroke};
    border-radius: ${theme.radius};
  `};

`

export default ScrollContainer