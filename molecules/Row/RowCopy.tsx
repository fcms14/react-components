import { useState } from "react"
import { RowCopyStyle, RowHeaderStyle, RowProps } from "./RowStyle"
import RowRoot from "./RowRoot"
import RowIcon from "./RowIcon"
import { Row } from "./"
import { LuCopyCheck } from "react-icons/lu";
import { FaCheck } from 'react-icons/fa';
import copyContent from "../../helpers/copyContent"
import RowSection from "./RowSection"
import { theme } from "../../../providers/theme"

export interface RowCopyInterface {
  text: string
}

const RowCopy = ({ text }: RowCopyInterface) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    setIsCopied(true);
    copyContent(text)
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <RowCopyStyle>
      <div>
        <RowIcon
          color={isCopied
            ? `${theme.colors.button.inactive}`
            : `${theme.colors.background.copy}`
          }
          onClick={() => { handleCopy(text) }}
          icon={isCopied
            ? FaCheck
            : LuCopyCheck
          }
        />
      </div>
      <pre>
        <Row.Text>
          {text}
        </Row.Text>
      </pre>
    </RowCopyStyle>
  )

}

export default RowCopy