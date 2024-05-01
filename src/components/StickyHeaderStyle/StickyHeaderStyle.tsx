import styled from 'styled-components'
import ResetTheme from '../../../providers/theme'
import { isMobile } from 'react-device-detect'

const StickyHeaderStyle = styled.header`
    background-color: ${ResetTheme.colors.WHITE};
    position: sticky;
    top: ${isMobile ? "1.5rem" : "2rem"};
    z-index: 1;

    ::before {
        content: '';
        position: absolute;
        bottom: -0px;
        left : ${isMobile ? '-1.5rem' : '-2rem'};
        right: ${isMobile ? '-1.5rem' : '-2rem'};
        height: calc(100% + ${isMobile ? "1.5rem" : "2rem"});
        background-color: ${ResetTheme.colors.WHITE};
        z-index: -1;
    }
`
export default StickyHeaderStyle

