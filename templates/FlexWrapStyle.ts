import styled from "styled-components";

const FlexWrapStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap};
  padding: ${({ theme }) => theme.padding.main};
`

export const SectioWrapperStyle = styled.aside`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap};
`

export default FlexWrapStyle