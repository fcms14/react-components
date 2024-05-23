import styled, { css } from "styled-components";

const NotificationStyle = styled.div`
  position: fixed;
  z-index: 3;
  ${({ theme }) => css`
    top: ${theme.padding.main};
    right: ${theme.padding.main};
  `}
`

export default NotificationStyle