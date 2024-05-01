import styled from 'styled-components'
import ResetTheme from '../../providers/theme'

interface Props {
  size?: string,
  color?: string,
  weight?: string,
  theme: any,
  children?: any,
}

const getFontWeight = (props: Props): string => {
  if(props.weight === 'bold') {
    return "font-family: 'InterBold';"
  }

  return "font-family: 'Inter';"
} 

const getFontSize = (props: Props): string => {
    const { size } = props

    if(size === 'lg')  return ResetTheme.fontSizes.text.lg
    if(size === 'md')  return ResetTheme.fontSizes.text.md
    if(size === 'sm')  return ResetTheme.fontSizes.text.sm
    if(size === 'xs')  return ResetTheme.fontSizes.text.xs
    if(size === 'xxs') return ResetTheme.fontSizes.text.xxs

    return ResetTheme.fontSizes.text.md
}

const getColor = (props: Props) => {
  let fontColor = props.color || ResetTheme.colors.GREYS[800]
  
  if (props.children?.includes('+R$')) {
    return 'green'
  }
  if (props.children?.includes('-R$')) {
    return 'red'
  }

  return fontColor
}

const Text = styled.p<Props>`
    ${props => getFontWeight(props)}
    font-size: ${props => getFontSize(props)};
    color: ${props =>  getColor(props)};
`

export default Text