import styled from "styled-components"
import ResetTheme from "../../../providers/theme"

const ProgressStyle = styled.progress<{max: number, value: number}>`
    width: 100%;
    height: 0.25rem;

    &::-webkit-progress-bar {
        background-color: ${ResetTheme.colors.GREYS[100]};
    }
    &::-webkit-progress-value {
        background-color: ${ResetTheme.colors.SECONDARY[1000]};
        border-radius: 3.125rem;
    }
    &::-moz-progress-bar {
        background-color: ${ResetTheme.colors.SECONDARY[1000]};
        border-radius: 3.125rem;
    }
`

export default ProgressStyle


