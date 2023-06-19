
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import useBicycleStore from 'src/store/useBicycleStore';
import { calculateRentPrice } from '../../utils/pricingManager';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#FEFEFE',
    color: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function BasicModal({open, handleClose, formData}) {
  
    const {selectedBicycle} = useBicycleStore();

    const handleConfirm = () => {
    
    }

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Estas a un click de reservar tu bicicleta!
            </Typography>

            <ul>
              <Box sx={{paddingBottom:"40px"}}>
                <Typography sx={{fontWeight:"bold"}}>Datos de la bicicleta solicitada</Typography>
                <li>Bicicleta elegida: {selectedBicycle.nombre?.toLocaleUpperCase()}</li>
                <li>Tipo de bicicleta: {selectedBicycle.type?.toLocaleUpperCase()}</li>
              </Box>

              <Box>
                <Typography sx={{fontWeight:"bold"}}>Datos de quien reserva</Typography>
                <li>Reservada a nombre de: {formData.nombre?.toLocaleUpperCase()}</li>
                <li>Email de contacto: {formData.email?.toLocaleUpperCase()}</li>
                <li>Telefono de contacto: {formData.telefono}</li>
                <li>Fecha de inicio: {new Date(formData.fechaInicio).toLocaleDateString()}</li>
                <li>Dias a reservar: {formData.diasReserva}</li>
              </Box>
                
            </ul>
            
            <Box sx={{display: 'flex', paddingBottom: "20px", alignItems:"center"}}>
              <Typography>Monto total de la reserva:</Typography>
              <Typography sx={{fontWeight:"bold", fontSize:"20px",alignContent:"center"}}>
                {calculateRentPrice(selectedBicycle.type, formData.diasReserva)} USD</Typography>
            </Box>

            <Box sx={{ display:"flex", float:"right", gap:"10px" }}>
                <Button variant="outlined" color="success" onClick={handleConfirm}>CONFIRMAR</Button>
                <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }