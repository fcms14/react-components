import styled from 'styled-components'
import { HeaderProps } from '../../../interfaces'

const HeaderStyle = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  height: 3.5rem;
  position: sticky;
  top: 0;
  z-index: 1;

  padding: ${({ theme }) => `0 ${theme.padding.header}`};
  background-color: ${({ theme }) => theme.colors.header.fill};

  justify-content: ${props => props?.justifyContent ?? "space-between"};
  flex-direction: ${props => props.flexDirection};
`

export default HeaderStyle