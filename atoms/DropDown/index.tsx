import { IconType } from "react-icons"
import {DropDownStyle, DropDownItemStyle, DropDownWrapper } from "./DropDownStyle"
import Icon from "../Icon"
import Text from "../Text"
import { theme } from "../../../providers/theme"
import { useState } from "react"
import { SlOptionsVertical } from "react-icons/sl";
import { Button } from "../../molecules/Button"


export interface DropDownItemInterface {
  text: string,
  icon?: IconType,
  onClick?: () => void,
  color?: string
  width?: number,  
}

export interface DropDownInterface {
  items: DropDownItemInterface[]
  show?: boolean,
  top?: string,
  right?: string,
}

const DropDown = ({ items, show, top, right }: DropDownInterface) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)

  return (
    <DropDownWrapper onMouseLeave={() => setShowOptions(false)} >
      {!show && <Button.Icon icon={SlOptionsVertical} onClick={() => setShowOptions(!showOptions)} color={theme.colors.main.font} applyPadding />}
      {showOptions || show ? (
      <DropDownStyle top={top} right={right}>
        {items.map(({ text, icon, onClick, color, width }, index) => (
          <DropDownItemStyle onClick={onClick} cursor={onClick ? 'pointer' : 'inherit'} key={index}>
            {icon && (
              <Icon
                icon={icon}
                color={color ?? theme.colors.main.font}
                width={width ?? Number(theme.fontsizes.title.default.match(/\d+/))}
              />
            )}
            <Text color={color ?? theme.colors.main.font}>{text}</Text>
           </DropDownItemStyle>
        ))}
      </DropDownStyle>
      ) : null}    
    </DropDownWrapper>
  )
}

export default DropDown