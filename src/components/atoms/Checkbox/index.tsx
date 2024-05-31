import { Field, useFormikContext } from "formik"
import CheckboxStyle from "./CheckboxStyle"
import { BaseSyntheticEvent } from "react"
import Subtitle from "../Subtitle"

interface Interface {
  name: string
  label: string
  checked: boolean
  color?: string
}

const Checkbox = ({ name, label, checked, color }: Interface) => {
  const { setFieldValue } = useFormikContext()

  return (
    <CheckboxStyle color={color}>
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