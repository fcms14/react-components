import { Field, useFormikContext } from "formik"
import { useState } from "react"
import MultiSelectStyle from "./MultiSelectStyle"
import Input from "../Input"
import { MdArrowDropDown } from "react-icons/md"
import { theme } from "../../../providers/theme"
import { IconComponentInterface } from "../../../interfaces"
import { InputMask } from "../../../helpers/Mask"

interface OptionInterface {
  value: string | number
  label: string
}

interface Interface {
  name: string
  label: string
  values?: string[]
  required?: boolean
  options: OptionInterface[]
  error?: string | boolean
}

const MultiSelect = ({ name, label, options, values, required, error }: Interface) => {
  const { setFieldValue } = useFormikContext()
  const [show, setShow] = useState(false)
  const [searchKey, setSearchKey] = useState<string>("")
  const onMouseLeave = () => { setSearchKey(""); setFieldValue(`search-${name}`, ""); setShow(false) }
  const icon: IconComponentInterface = { icon: MdArrowDropDown, width: Number(theme.fontsizes.title.default.match(/\d+/)), onClick: () => setShow(!show) }

  return (
    <MultiSelectStyle show={show}>
      <Input
        name={`search-${name}`}
        label={`${values ? `${label}: ${values}` : label}`}
        type="text"
        onFocus={() => setShow(true)}
        onChange={(value: string) => {
          setShow(value.length > 0)
          setSearchKey(value)
        }}
        icon={icon}
        error={error}
      />
      <Field
        onMouseLeave={onMouseLeave}
        as={"select"}
        name={name}
        id={name}
        required={required}
        multiple={true}
        value={values}
        size={8}
      >
        {show &&
          options
            .filter((option) => InputMask.normalize(`${option.label} ${option.value}`).includes(InputMask.normalize(searchKey)))
            .map(({ value, label }) => <option value={value} key={value}>{label}</option>)
        }
      </Field>
    </MultiSelectStyle>
  )
}

export default MultiSelect