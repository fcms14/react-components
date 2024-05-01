import styled from 'styled-components'
import {ButtonInterface, ButtonStyleInterface } from './ButtonInterface'
import DefaulTheme from '../../../providers/theme'

const getSizes = (props: ButtonInterface): string => {
    const { size, noText, full, noPadding } = props

    let fontSize     = DefaulTheme.fontSizes.text.md
    let paddings     = '1rem 1rem'

    if (size === 'md') {
        fontSize     = DefaulTheme.fontSizes.text.md
    }

    if (size === 'sm') {
        fontSize     = DefaulTheme.fontSizes.text.sm
        paddings     = '0.5rem 2rem'
    }

    if (size === 'xs') {
        fontSize     = DefaulTheme.fontSizes.text.xs
        paddings     = '0.5rem 2rem'
    }

    if(noText) {
        paddings = '0.75rem'
    }

    if(noPadding) {
        paddings = '0px'
    }

    return `
        ${ full ? 'width: 100%' : '' };
        font-size: ${fontSize};
        border-radius: 0.125rem;
        padding: ${paddings};
    `
}

const getColor = (props: ButtonStyleInterface): string => {
    const type      = props.type || 'primary'
    const simple    = props.simple
    const textColor = props.textColor
    const backgroundColor = props.backgroundColor
    
    let background = DefaulTheme.colors.PRIMARY[1000];
    let color      = DefaulTheme.colors.WHITE;
    let active     = DefaulTheme.colors.GREYS[1000];
    let focus      = DefaulTheme.colors.GREYS[1000];
    let hover      = DefaulTheme.colors.GREYS[800];

    if (props.disabled) {
        return`
            background-color: ${DefaulTheme.colors.GREYS[600]};
            color: ${DefaulTheme.colors.WHITE};
        `
    }

    if (props.transparent) {
        return`
            background-color: transparent;
            border: 1px solid transparent!important;
        `
    }

    if (type === 'danger') {
        background = DefaulTheme.colors.RED_200;
    }

    if (type === 'secondary') {
        background = DefaulTheme.colors.WHITE;
        color      = textColor || DefaulTheme.colors.PRIMARY[1000];
        active     = DefaulTheme.colors.PRIMARY[200];
        focus      = DefaulTheme.colors.PRIMARY[200];
        hover      = DefaulTheme.colors.PRIMARY[200];
    }
    
    if (type === 'tertiary') {
        return `
            background-color: transparent;
            color           : ${DefaulTheme.colors.PRIMARY[1000]};
            border-color: transparent;
            &:hover {
                background-color: ${simple ? 'transparent': DefaulTheme.colors.PRIMARY[200]};
            }
            &:active {
                background-color: ${simple ? 'transparent': DefaulTheme.colors.PRIMARY[200]};
            }
            &:focus {
                background-color: ${simple ? 'transparent': DefaulTheme.colors.PRIMARY[200]};
            }
        `
    }

    if (type === 'shortcut') {
        return `
            background-color: ${DefaulTheme.colors.SECONDARY[1000]};
            color           : ${DefaulTheme.colors.PRIMARY[1000]};
            border-color: transparent;
            padding: 0px;
            width: 120px;
            height: 120px;
            &:hover {
                background-color: ${simple ? 'transparent': DefaulTheme.colors.PRIMARY[200]};
            }
            &:active {
                background-color: ${simple ? 'transparent': DefaulTheme.colors.PRIMARY[200]};
            }
            &:focus {
                background-color: ${simple ? 'transparent': DefaulTheme.colors.PRIMARY[200]};
            }
        `
    }

    return `
        background-color: ${backgroundColor? backgroundColor : background};
        color           : ${textColor};
        &:hover {
            background-color: ${hover};
        }
        &:active {
            background-color: ${active};
        }
        &:focus {
            background-color: ${focus};
        }
        &[disabled] {
            color: red;
        }
    `
}

const getButtonWidth = (props: ButtonInterface): string => {
    const { iconOnly, flat} = props
    let width = null
    let height = null

    if (iconOnly) {
        width = '49px'
        height = '42px'
    }
    if (flat && !iconOnly) {
        width = '230px'
    }
    

    return `
        ${width?'width: ' + width : ''};
        border-radius: 0.125rem;
    `
}




const ButtonStyle = styled.button<{props: ButtonStyleInterface}>`
    cursor    : pointer;
    text-align: center;
    ${(props) => getButtonWidth(props.props)};
    ${(props) => getColor(props.props)};
    ${(props) => getSizes(props.props)};
    & div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > div > span {
        font-size: ${DefaulTheme.fontSizes.text.sm};
    }
`

export default ButtonStyle