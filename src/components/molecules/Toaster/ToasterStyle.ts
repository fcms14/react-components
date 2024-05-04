import styled from 'styled-components'
import { ToasterProps } from '../../../interfaces'

const ToasterStyle = styled.div<ToasterProps >`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 4px 8px;
gap: 4px;
position: relative;

padding: 0.70rem 0.70rem;

background: ${props => props.theme.colorByType[props.type]};
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

`

export default ToasterStyle

