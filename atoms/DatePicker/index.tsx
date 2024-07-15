import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import DatePickerStyle from "./DatePickerstyle"

registerLocale('ptBR', ptBR);

export interface DatePickerInterface {
  onDateChange: (date: Date) => void;
  date: Date;
}

const CustomDatePicker = ({ onDateChange, date }: DatePickerInterface) => {
  return (
    <DatePickerStyle>
      <DatePicker
        selected={date}
        onChange={(value: any) => onDateChange(new Date(value))}
        dateFormat="dd/MM/yyyy"
        locale="ptBR"
      />
    </DatePickerStyle>
  );
};

export default CustomDatePicker;
