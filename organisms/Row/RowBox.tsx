import { Row } from '../../molecules/Row';
import RowRoot from '../../molecules/Row/RowRoot';
import CardBoxStyle from '../../atoms/CardBox';

export interface RowBoxInterface {
  upperText: string,
  medText: string,
  borderText: string
  color?: string
}

const RowBox = ({ upperText, medText, borderText, color }: RowBoxInterface) => {

  return (
    <CardBoxStyle>
      <RowRoot rowStyle={{ flexDirection: "column", justifyContent: "left" }}>
        <Row.Section sectionStyle={{ flexDirection: "row" }}>
          <Row.Text>
            {upperText}
          </Row.Text>
        </Row.Section>
        <Row.Section sectionStyle={{ flexDirection: "row" }}>
          <Row.Title color={color ? color : ''}>
            {medText}
          </Row.Title>
        </Row.Section>
        <Row.Section sectionStyle={{ flexDirection: "row" }}>
          <Row.Text>
            {borderText}
          </Row.Text>
        </Row.Section>
      </RowRoot>
    </CardBoxStyle>
  );
};

export default RowBox;
