import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetBiciData } from 'src/services/api';
import { Button, CircularProgress } from '@mui/material';
import ItemLista from 'src/components/ItemLista';
import BackToHomeButton from 'src/components/BackToHomeButton';
import RentForm from 'src/components/RentForm';

export default function RentFormPage() {
    const { id } = useParams();

    const [biciData, setBiciData] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        // Aqui podriamos obtener propiedades adicionales de la bici en cuestion.
        const getBiciDetails = async () => {
            const data = await GetBiciData(id);

            // Prevenimos renderizar si modificamos a mano la url y no obtenemos resultados.
            if(!data) {
                navigate("/error")
            }

            setBiciData(data);
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

    return <div>

        <div>
            <h1>Usted seleccionó...</h1>
            <ItemLista {...biciData} isPresentational={true}/>
        </div>

        <section>
            <h1>Complete sus datos para realizar la reserva</h1>

            <div>
                <RentForm />
            </div>
        </section>

        <BackToHomeButton/>
    </div>
}