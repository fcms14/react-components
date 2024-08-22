import { useFormikContext } from "formik"
import { useState } from "react"
import SelectStyle, { SelectLi, SelectNav, SelectUl } from "./SelectStyle"
import Input from "../Input"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
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
  error?: string
}

const Select = ({ name, label, options, value, error }: SelectInterface) => {
  const { setFieldValue } = useFormikContext()
  const [show, setShow] = useState(false)
  const [searchKey, setSearchKey] = useState<string>("")
  const onMouseLeave = () => { setSearchKey(""); setShow(false) }
  const icon: IconComponentInterface = { icon: show ? MdArrowDropUp : MdArrowDropDown, width: Number(theme.fontsizes.title.default.match(/\d+/)), onClick: () => setShow(!show) }

  const selected = options.find((option) => option.value === value)

  return (
    <SelectStyle onMouseLeave={onMouseLeave}>
      <Input
        name={name}
        label={`${selected ? `${label}: ${selected.label}` : label}`}
        type="text"
        onFocus={() => setShow(true)}
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