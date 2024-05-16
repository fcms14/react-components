import { CellProps, TableProps } from "../../../interfaces"
import TableStyle, { ThStyle, TdStyle, TableWrapper } from "./TableStyle"

interface CellInterface {
  text: string
  cellStyle?: CellProps
  onClick?: () => void
  width?: string
}

interface RowInterface {
  cell: CellInterface[]
}

interface TableInterface {
  headers: CellInterface[]
  rows: RowInterface[]
  tableStyle?: TableProps
}

const Table = ({ headers, rows, tableStyle }: TableInterface) => {
  return (
    <TableWrapper {...tableStyle}>
      <TableStyle>
        <thead>
          <tr>
            {headers.map((header: CellInterface, index: number) =>
              <ThStyle key={index} {...header.cellStyle}> {header.text} </ThStyle>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: RowInterface, index: number) =>
            <tr key={index}>
              {row.cell.map((cell: CellInterface, index: number) =>
                <TdStyle
                  key={index}
                  {...cell.cellStyle}
                  cursor={cell.onClick ? "pointer" : undefined}
                  onClick={cell.onClick}
                  width={cell.width}
                >
                  {cell.text}
                </TdStyle>
              )}
            </tr>
          )}
        </tbody>
      </TableStyle>
    </TableWrapper>
  )
}
export default Table