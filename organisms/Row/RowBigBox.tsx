import { theme } from '../../../providers/theme';
import { Row } from '../../molecules/Row';
import { isMobile } from 'react-device-detect'

export interface RowBoxInterface {
  upperText: string,
  medText: string,
  borderText: string
  color?: string
  width?: string
  height?: string
  BottomUpperText: string
  BottomMedText: string
  BottomBorderText: string
}

const RowBigBox = ({ upperText, medText, borderText, color, width,height, BottomUpperText, BottomMedText, BottomBorderText }: RowBoxInterface) => {
  const size = !isMobile ? 'default' : 'small'

  return (
    <Row.Root rowStyle={{
      flexDirection: "column",
      justifyContent: "left",
      boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.25)",
      borderRadius: "8px",
      flexGrow: "1",
      width: theme.exchange.header,
    }}>
      <Row.Title> {upperText} </Row.Title>
      <Row.Text size={'bigger'} color={color ? color : ''}> {medText} </Row.Text>
      <Row.Text size={size} textWrap='nowrap'> {borderText} </Row.Text>

      <Row.Title> {BottomUpperText} </Row.Title>
      <Row.Text size={'bigger'} color={color ? color : ''}> {BottomMedText} </Row.Text>
      <Row.Text size={size} textWrap='nowrap'> {BottomBorderText} </Row.Text>
    </Row.Root>
  )
}

export default RowBigBox;
