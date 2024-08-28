
const consumoAnimales = async () => {
    try {
        const response = await fetch('../../../animales.json');
        if (!response.ok) {
            throw new error('archivo json no encontrado')
        }
        const datos = await response.json();
        return datos
    } catch (error) {
        return {};
    }
}

const buscarPorNombre = (nombre, animales = []) => {
    let datos = animales.find((elemento) => {
        return elemento.name === nombre;
    });
    return datos;
}

export { consumoAnimales, buscarPorNombre }