import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import DatePickerStyle from "./DatePickerstyle"

registerLocale('ptBR', ptBR);

export interface DatePickerInterface {
    onDateChange: (date: Date | null) => void;
}

const CustomDatePicker = ({ onDateChange}: DatePickerInterface) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <DatePickerStyle>
        <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        locale="ptBR"
        />
    </DatePickerStyle>
  );
};

export default CustomDatePicker;
