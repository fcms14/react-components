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
  options: OptionInterface[]
}

const MultiSelect = ({ name, label, options, values }: Interface) => {
  const { setFieldValue } = useFormikContext()
  const [show, setShow] = useState(false)
  const [searchKey, setSearchKey] = useState<string>("")
  const onMouseLeave = () => { setSearchKey(""); setFieldValue("search", ""); setShow(false) }
  const icon: IconComponentInterface = { icon: MdArrowDropDown, width: Number(theme.fontsizes.title.default.match(/\d+/)), onClick: () => setShow(!show) }

  return (
    <MultiSelectStyle show={show} onMouseLeave={onMouseLeave}>
      {<Input
        name={"search"}
        label={`${values ? `${label}: ${values}` : label}`}
        type="text"
        onFocus={() => setShow(true)}
        onChange={(value: string) => {
          setShow(value.length > 0)
          setSearchKey(value)
        }}
        icon={icon}
      />
      }
      <Field
        as={"select"}
        name={name}
        id={name}
        required={true}
        multiple={true}
        value={values}
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