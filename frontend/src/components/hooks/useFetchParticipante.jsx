import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';
export const useFetchNombresParticipante=(torneoId)=>{
  const [participante, setParticipante] = useState([]);
  const getParticipantesByTorneo = async () => {
    try {
      const response = await axios.get(`${endpoint}/nombresByTorneo/${torneoId}`);
      setParticipante(response.data);
    } catch (error) {
      alert('Error al traer los participantes');
    }
  };
  useEffect(() => {
    getParticipantesByTorneo(); // Asegúrate de llamar a la función con torneoId
  }, [torneoId]); // Agrega torneoId como dependencia

  return {participante };
}
export const useFetchParticipante = (torneoId) => {
  const [participante, setParticipante] = useState([]);

  useEffect(() => {
    const getParticipantesByTorneo = async () => {
      try {
        const response = await axios.get(`${endpoint}/participanteByTorneo/${torneoId}`);
        setParticipante(response.data);
      } catch (error) {
        alert('Error al traer los participantes');
      }
    };

    getParticipantesByTorneo(); // Asegúrate de llamar a la función con torneoId
  }, [torneoId]); // Agrega torneoId como dependencia

  return {participante };
};

export const deleteParticipante = async (participanteId) => {
  try {
    await axios.delete(`${endpoint}/participante/${participanteId}`);
  } catch (error) {
    alert('Error al eliminar el participante :(');
  }
};
