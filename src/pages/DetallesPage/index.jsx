import BackToHomeButton from "src/components/BackToHomeButton";

export default function DetallesPage() {

    const detallesReserva = window.localStorage.getItem("reserva");

    const obj = JSON.parse(detallesReserva);
    return <>
        <h1>Los detalles de tu reserva son los siguientes:</h1>
        <ul style={{fontSize:"40px", listStyle:"none"}}>
            <li>Nombre: {obj.name}</li>
            <li>Precio: {obj.price} USD</li>
            <li>Tipo: {obj.type?.toLocaleUpperCase()}</li>
        </ul>

        <BackToHomeButton/>
    </>
}