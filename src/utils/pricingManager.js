export const getBasePrice = () => {
    // Aqui definimos el valor base para toda la aplicacion.
    const date = new Date();
    return date.getDate() < 15 ? 10 : 12;
}


const calculateDayCost = (basePrice, days, baseDays) => {
    const baseACobrar = basePrice * days;

    if(days > baseDays) {
        const resto = days - baseDays;
        return  baseACobrar + (basePrice * resto)
    }

    return baseACobrar;
}

export const calculateRentPrice = (type, days) => {
    // En el escenario ideal esta logica debería residir en el backend
    const basePrice = getBasePrice();
    switch (type) {
        case "electrica":
            return basePrice * days
        case "normal":
            //El coste del alquiler será el precio base por los primeros 3 días 
            // y después el precio base por cada día extra
            return calculateDayCost(basePrice, days, 3)
        case "antigua":
            // El coste del alquiler será el precio base por los primeros 5 días 
            // y después el precio base por cada día extra.
            return calculateDayCost(basePrice, days, 5)
        default:
            return basePrice
    }

}