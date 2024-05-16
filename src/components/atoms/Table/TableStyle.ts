import styled, { css } from 'styled-components'
import { CellProps, TableProps } from '../../../interfaces'


const TableStyle = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: ${({ theme }) => theme.gap} 0;

    > thead {
        position: sticky;
        top: 0;
        background-color: #FFFFFF;
        z-index: 1;
    }

    > thead > tr > th {
        ${({ theme }) => css`
            border-bottom: 1px solid ${theme.colors.main.stroke};
            padding: ${theme.padding.header};
        `}
    }

    > tbody > tr > td {
        ${({ theme }) => css`
            border-bottom: 1px solid ${theme.colors.main.stroke};
            padding: ${theme.padding.header};
        `}
    }
`

export const TableWrapper = styled.div<TableProps>`
    max-height: ${({ height }) => height};
    overflow-y: auto;
`

export const ThStyle = styled.th<CellProps>`
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
    `

export const TdStyle = styled.td<CellProps>`
    font-size: ${({theme}) => theme.fontsizes.text.small};
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
    cursor: ${props => props.cursor};
`

export default TableStyle