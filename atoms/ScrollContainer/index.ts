import styled, { css } from "styled-components";

interface Props {
  maxHeight?: string
}

const ScrollContainer = styled.section<Props>`
  overflow-y: auto;
  position: relative;
  flex-grow: 1;
  
  ${({ theme, maxHeight }) => css`
    max-height: ${maxHeight};
    border: ${theme.border} ${theme.colors.main.stroke};
    border-radius: ${theme.radius};
  `};

`

export default ScrollContainer