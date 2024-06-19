import styled from 'styled-components'

interface Props {
  padding?: string
  flexGrow?: number
  headerTop?: string
}

const MainStyle = styled.main<Props>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding};
  flex-grow: ${({ flexGrow = 1 }) => flexGrow};

  > header {
   top: ${({ headerTop }) => headerTop};
  }
`

export default MainStyle