import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetBiciData } from 'src/services/api';
import { Box, CircularProgress } from '@mui/material';
import ItemLista from 'src/components/ItemLista';
import BackToHomeButton from 'src/components/BackToHomeButton';
import RentForm from 'src/components/RentForm';
import useBicycleStore from '../../store/useBicycleStore';

export default function RentFormPage() {
    const { id } = useParams();

    const [biciData, setBiciData] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const {setSelectedBicycle} = useBicycleStore();

    useEffect(() => {
        // Aqui podriamos obtener propiedades adicionales de la bici en cuestion.
        const getBiciDetails = async () => {
            const data = await GetBiciData(id);

            // Prevenimos renderizar si modificamos a mano la url y no obtenemos resultados.
            if(!data) {
                navigate("/error")
            }

            setBiciData(data);
            setSelectedBicycle(data);
            setLoading(false);
        }

        setTimeout(() =>  getBiciDetails() ,1000);
    },[]);




    // Simulacion de pantalla de carga desde un backend.
    // Puede ser totalmente removida esta logica junto al timeout de la linea 29.
    if(loading) {
        return <>
            <h1>Estamos cargando su seleccion...</h1>
            <CircularProgress/>
        </>
    }

    return <Box style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"}}>

        <Box sx={{display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center"}}>
            <h1>Usted seleccionó...</h1>
            <ItemLista {...biciData} isPresentational={true}/>
            <BackToHomeButton customText="Cancelar mi selección y volver al inicio"/>
        </Box>

        <Box>
            <h1>Complete sus datos para realizar la reserva</h1>
            <span>Los campos marcados con un asterisco * son requeridos.</span>

            <div style={{paddingTop:"20px"}}>
                <RentForm />
            </div>
        </Box>
    </Box>
}