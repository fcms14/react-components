import styled from 'styled-components'
import { SectionProps } from '../../../interfaces'

const Section = styled.section<SectionProps>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: ${props => props.alignItems};
`

export default Section