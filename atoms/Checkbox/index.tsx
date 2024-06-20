import { Field, useFormikContext } from "formik"
import CheckboxStyle from "./CheckboxStyle"
import { BaseSyntheticEvent } from "react"
import Subtitle from "../Subtitle"

export interface CheckboxInterface {
  name: string
  label: string
  checked: boolean
  color?: string
  margin?: string
}

const Checkbox = ({ name, label, checked, color, margin }: CheckboxInterface) => {
  const { setFieldValue } = useFormikContext()

  return (
    <CheckboxStyle color={color} margin={margin} >
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
    </CheckboxStyle>
  )
}

export default Checkbox