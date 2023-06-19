export const basePrice = () => {
    // Aqui definimos el valor base para toda la aplicacion.
    const date = new Date();
    return date.getDate() < 15 ? 10 : 12;
}

export const calculateRentPrice = (days) => {

    return "N/A";
}