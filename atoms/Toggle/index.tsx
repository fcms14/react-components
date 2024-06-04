import { Field, useFormikContext } from "formik"
import ToggleStyle, { ToggleSpanProps } from "./ToggleStyle"
import { BaseSyntheticEvent } from "react"
import Subtitle from "../Subtitle"

export interface ToggleInterface {
  name: string
  label: string
  checked: boolean
  color?: string
  toggleStyle?: ToggleSpanProps
}

const Toggle = ({ name, label, checked, color, toggleStyle }: ToggleInterface) => {
  const { setFieldValue } = useFormikContext()

  return (
    <ToggleStyle {...toggleStyle} color={color}>
      <Field
        id={name}
        name={name}
        type="checkbox"
        onChange={(e: BaseSyntheticEvent) => setFieldValue(e.currentTarget.name, !checked)}
        checked={checked}
      />
      <label htmlFor={name}>
        <Subtitle color={color}> {label} </Subtitle>
      </label>
    </ToggleStyle>
  )
}

export default Toggle