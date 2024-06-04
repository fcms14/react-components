import { useFormikContext } from "formik"
import { useState } from "react"
import SelectStyle, { SelectLi, SelectNav, SelectUl } from "./SelectStyle"
import Input from "../Input"
import { MdArrowDropDown } from "react-icons/md"
import { theme } from "../../../providers/theme"
import { IconComponentInterface } from "../Icon"
import { InputMask } from "../../../components/helpers/Mask"

interface OptionInterface {
  value: string | number
  label: string
}

export interface SelectInterface {
  name: string
  label: string
  value: string
  options: OptionInterface[]
  error?: string | boolean
}

const Select = ({ name, label, options, value, error }: SelectInterface) => {
  const { setFieldValue } = useFormikContext()
  const [show, setShow] = useState(false)
  const [searchKey, setSearchKey] = useState<string>("")
  const onMouseLeave = () => { setSearchKey(""); setShow(false) }
  const icon: IconComponentInterface = { icon: MdArrowDropDown, width: Number(theme.fontsizes.title.default.match(/\d+/)) }

  return (
    <SelectStyle onMouseLeave={onMouseLeave}>
      <Input
        name={name}
        label={`${value ? `${label}: ${value}` : label}`}
        type="text"
        onFocus={() => setShow(!show)}
        onChange={(value: string) => {
          setShow(value.length > 0)
          setSearchKey(value)
        }}
        icon={icon}
        error={error}
      />
      {show && <SelectNav><SelectUl>
        {options
          .filter((option) => InputMask.normalize(`${option.label} ${option.value}`).includes(InputMask.normalize(searchKey)))
          .map((option) => <SelectLi selected={option.value === value} value={option.value} key={option.value} onClick={() => setFieldValue(name, option.value)}>{option.label}</SelectLi>)
        }
      </SelectUl></SelectNav>}
    </SelectStyle>
  )
}

export default Select