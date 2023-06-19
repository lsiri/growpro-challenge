import './item-lista.css';
import { useNavigate } from 'react-router-dom';

export default function ItemLista(props) {
    const { id, nombre, img, type, isPresentational} = props;
    
    const navigate = useNavigate();

    if(isPresentational) {
        return <div className="lista-block-p">
            <p>{nombre}</p>
            <img src={img} width={100} />
            <p style={{fontWeight:"bold"}}>{type?.toLocaleUpperCase()}</p>
        </div>
    }

    return <div className="lista-block" 
        onClick={() => {
            navigate(`/alquiler/${id}`)
        }}>
        <p>{nombre}</p>
        <img src={img} width={100} />
        <p style={{fontWeight:"bold"}}>{type?.toLocaleUpperCase()}</p>
    </div>
}