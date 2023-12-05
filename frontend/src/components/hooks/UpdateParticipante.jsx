import axios from 'axios';

const endpoint = 'http://localhost:8000/api/participante';

export const createParticipante = async (data)=>{
    try{
    await axios.post(endpoint,data)
    alert('Participante Creado Correctamente')
    }
    catch(error){
        alert(`Error al crear participante ${error}`)
    }
}
export const updateParticipante = async (participanteId, data) => {
  return axios.put(`${endpoint}/${participanteId}`, data);
};
