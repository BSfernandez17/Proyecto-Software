import axios from 'axios';

const endpoint = 'http://localhost:8000/api/torneo';

export const fetchTorneoById = async (id) => {
  return axios.get(`/${endpoint}/${id}`);
};

export const updateTorneo = async (id, data) => {
  return axios.put(`${endpoint}/${id}`, data);
};
export const createTorneo = async (data)=>{
    try{
    await axios.post(endpoint,data)
    alert('Torneo Creado Correctamente')
    }
    catch(error){
        alert('Error al crear el torneo',error)
    }
}