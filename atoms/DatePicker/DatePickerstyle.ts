import styled, { css } from 'styled-components'
import { theme } from '../../../providers/theme'

const DatePickerStyle = styled.div`
  .react-datepicker-popper {
    z-index: 3; 
  }

  .react-datepicker-wrapper {
    max-width: 8em;
  }

  input {
   border: 1px solid ${theme.colors.main.stroke};
   border-radius: ${theme.radius};
   width: auto;  
   max-width: 100%; 
   text-align: center; 
 }
`
export default DatePickerStyle