import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomDatePicker from "../DatePicker";
import BasicModal from "../Modal";

export default function RentForm() {

    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    const {
        register,
        getValues,
    } = useForm();

    const onSubmit = (e) => {
        e.preventDefault()
        const data = getValues();

        data.fechaInicio = startDate;
        // aqui podríamos realizar las validaciones que consideremos necesarias.
        setOpenModal(true);
        setFormData(data);
    }; 

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
        type:"email",
        placeholder:"lucas@bestbike.com"
    },
    {
        id: "telefono",
        fieldName: "Telefono",
        isRequired: true,
        type:"number",
    },
    {
        id: "fechaInicio",
        fieldName: "Fecha de inicio del alquiler",
        isRequired: true,
        type:"datepicker",
        placeholder:"DD/MM/YYYY"
    },
    {
        id: "diasReserva",
        fieldName: "Dias a reservar",
        isRequired: true,
        type:"number",
        placeholder: "2",
        max:"365"
    },
    {
        id: "observaciones",
        fieldName: "Observaciones adicionales",
        isRequired: false,
        type:"string",
        placeholder: "Pasaré por la tarde..."
    }]

    const generateField = (field) => {

        if(field.type === "datepicker") {
            return <CustomDatePicker startDate={startDate} setStartDate={setStartDate}/>
        }

        return <TextField
            {...register(field.id, {required: field.isRequired})}
            id={field.id}
            name={field.id}
            type={field.type}
            required={field.isRequired}
            placeholder={field.placeholder}
            sx={{
                ".MuiInputBase-input": {
                    borderRadius: "10px",
                    backgroundColor:"lightgray",
                },
            }}
        />
    }


    return (<>
            <form onSubmit={onSubmit}>
                <Box sx={{display: "flex", flexDirection:"column"}}>
                    {fields.map((field) => {
                    return <Box key={field.id} sx={{paddingBottom:"20px"}}>
                        <Typography>{field.fieldName} {field.isRequired ? "*" : ""}</Typography>
                            {generateField(field)}
                    </Box>
                    })}
                </Box>
                <Button type="submit" variant="outlined">Enviar</Button>
            </form>
            <BasicModal open={openModal} handleClose={() => setOpenModal(false)} formData={formData}/>
        </>
        );
    }