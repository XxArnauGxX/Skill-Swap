import axios from 'axios';

const API_URL = '/';

export const pruebaConexion = async () => {
  try {
    const respuesta = await axios.get(API_URL);
    console.log(respuesta.data);
  } catch (error) {
    console.error('Error al conectar con el backend:', error);
  }
};
