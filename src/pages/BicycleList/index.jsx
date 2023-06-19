import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemLista from 'src/components/ItemLista';
import { GetBicicletas } from 'src/services/api';

export default function BicycleList() {

    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Aqui deberíamos hacer la request para obtener la data.
        const requestData = async () => {
            const bicis = await GetBicicletas();

            if(bicis){
                setLista(bicis);
                setLoading(false);
            }
        }

        setLoading(true);
        // setTimeout(() => requestData(), 2000)
        requestData()
    },[]);
   
    
    if(loading) {
        return <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <CircularProgress />
            <span>Cargando...</span>
        </div>
    }

    return <>
        <div style={{
            display: 'grid',
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        }}>
            { lista.map((bici) => (<ItemLista key={bici.id} {...bici} />)) }
        </div>
    </>
}