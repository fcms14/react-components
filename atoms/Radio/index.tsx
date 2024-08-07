import { Field, useFormikContext } from "formik"
import Subtitle from "../Subtitle"
import RadioStyle from "./RadioStyle"
import { BaseSyntheticEvent } from "react"

export interface RadioInterface {
  id: string
  name: string
  value: string
  label: string
  color?: string
  onChange?: () => void
}

const Radio = ({ id, name, value, label, color, onChange }: RadioInterface) => {
  const { setFieldValue } = useFormikContext()

  return (
    <RadioStyle color={color}>
      <Field
        id={id}
        name={name}
        value={value}
        type="radio"
        onChange={(e: BaseSyntheticEvent) => {
          setFieldValue(e.currentTarget.name, value)
          onChange?.()
        }}
      />
      <label htmlFor={id}>
        <Subtitle color={color}> {label} </Subtitle>
      </label>
    </RadioStyle>
  )
}

export default Radio