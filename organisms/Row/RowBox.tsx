import { Row } from '../../molecules/Row';
import { isMobile } from 'react-device-detect'

export interface RowBoxInterface {
  upperText: string,
  medText: string,
  borderText: string
  color?: string
}

const RowBox = ({ upperText, medText, borderText, color }: RowBoxInterface) => {
  const size = !isMobile ? 'default' : 'small'

  return (
    <Row.Root rowStyle={{
      flexDirection: "column",
      justifyContent: "left",
      boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.25)",
      borderRadius: "8px",
      flexGrow: "1"
    }}>
      <Row.Text size={size}> {upperText} </Row.Text>
      <Row.Text size={'bigger'} color={color ? color : ''}> {medText} </Row.Text>
      <Row.Text size={size} textWrap='nowrap'> {borderText} </Row.Text>
    </Row.Root>
  )
}

export default RowBox;
