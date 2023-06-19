import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "../DatePicker";
import DatePickerMui from "../DatePicker";

export default function RentForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  const fields = [
    {
        id: "nombre",
        fieldName: "Nombre",
        isRequired: true,
        type:"string",
    },
    {
        id: "email",
        fieldName: "Email",
        isRequired: true,
        type:"string",
        vaidateWith: "regex"
    },
    {
        id: "telefono",
        fieldName: "Telefono",
        isRequired: true,
        type:"string",
    },
    {
        id: "fechaInicio",
        fieldName: "Fecha de inicio del alquiler",
        isRequired: true,
        type:"datepicker",
    },
    {
        id: "diasReserva",
        fieldName: "Dias a reservar",
        isRequired: true,
        type:"number",
    },
    {
        id: "observaciones",
        fieldName: "Observaciones adicionales",
        isRequired: false,
        type:"string",
    }]
    // nombre del usuario, 
    // email del usuario,
    // teléfono del usuario, 
    // fecha de inicio del alquiler, 
    // duración en días del alquiler

    useEffect(() => {
        fields.map((field) => register(field.id, {required: field.isRequired}));
    },[])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="email@" {...register("example")} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <p>This field is required</p>} */}

        <Box sx={{display: "flex", flexDirection:"column"}}>
            {fields.map((field) => {
            return <Box sx={{paddingBottom:"20px"}}>
                <Typography>{field.fieldName}</Typography>
                    <TextField
                        required={field.isRequired}
                        sx={{
                            ".MuiInputBase-input": {
                                borderRadius: "10px",
                                backgroundColor:"lightgray"
                            },
                        }}
                    />
            </Box>
            })}
        </Box>

        <DatePickerMui />

      <input type="submit" />
    </form>
  );
}