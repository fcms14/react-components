import { Row } from '../../molecules/Row';
import RowRoot from '../../molecules/Row/RowRoot';
import CardBoxStyle from '../../atoms/CardBox';
import { isMobile } from 'react-device-detect'

export interface RowBoxInterface {
  upperText: string,
  medText: string,
  borderText: string
  color?: string
}

const RowBox = ({ upperText, medText, borderText, color }: RowBoxInterface) => {
   const size  = !isMobile ? 'default' : 'small'
  return (
    <CardBoxStyle>
      <RowRoot rowStyle={{ flexDirection: "column", justifyContent: "left" }}>
        <Row.Section sectionStyle={{ flexDirection: "row" }}>
          <Row.Text size={size}>
            {upperText}
          </Row.Text>
        </Row.Section>
        <Row.Section sectionStyle={{ flexDirection: "row" }}>
          <Row.Text  size={'bigger'} color={color ? color : ''}>
            {medText}
          </Row.Text>
        </Row.Section>
        <Row.Section sectionStyle={{ flexDirection: "row",  }}>
          <Row.Text  size={size} textWrap='nowrap'>
            {borderText}
          </Row.Text>
        </Row.Section>
      </RowRoot>
    </CardBoxStyle>
  );
};

export default RowBox;
