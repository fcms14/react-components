import styled from "styled-components";
import { RowProps } from "../../../interfaces";

const RowStyle = styled.div<RowProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap};
  justify-content: ${(props) => props?.justifyContent ?? "space-between"};

  padding: ${({ theme }) => `${theme.gap} ${theme.padding.main}`};

  position: ${(props) => props?.position};
  top: ${(props) => props?.top};
  background-color: ${(props) => props?.backgroundColor};
  border-bottom: ${(props) => props?.borderBottom};
  box-shadow: ${(props) => props?.boxShadow};
  margin-bottom: ${(props) => props?.marginBottom};
`

export default RowStyle;
