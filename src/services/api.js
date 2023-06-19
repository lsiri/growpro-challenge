import biciMock from 'src/utils/data.json';

export const GetBicicletas = async () => fetch("http://localhost:3000/getbicis").then(() => biciMock.data);

export const GetBiciData = async (id) => fetch("http://localhost:3000/getbici/" + id).then(() => {
    return biciMock.data.find((x) => x.id === id);
});
