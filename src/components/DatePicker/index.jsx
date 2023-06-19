import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import './datepicker.css';

registerLocale('es', es);

export default function CustomDatePicker({startDate, setStartDate}) {
    return <DatePicker 
            className="basic-datepicker"
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            locale="es" 
            dateFormat={"P"} 
        />
}