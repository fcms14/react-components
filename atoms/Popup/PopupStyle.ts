import styled from 'styled-components';
import { theme } from '../../../providers/theme';

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 1.5rem;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 90%;
  max-width: 400px;
  background-color: #ffffff;
  border: 1px solid ${theme.colors.header.font};
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  z-index: 3;
`;
