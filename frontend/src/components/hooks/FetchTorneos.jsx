import { useState,useEffect } from 'react'
import axios from 'axios';
const endpoint ='http://localhost:8000/api'

export const resultados = (torneoId) => {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    // Hacer la solicitud al backend
    const simularTorneo = async () => {
      try {
        const response = await axios.get(`${endpoint}/torneo/simular-torneo/${torneoId}`);
        setResultados(response.data);
      } catch (error) {
        console.error('Error al simular torneo:', error);
      }
    };

    simularTorneo();
  }, [torneoId]); // Agrega torneoId como dependencia para que se vuelva a ejecutar cuando cambie

  return {resultados};
};
export const useFetchTorneos = () => {
  const [torneo, setTorneo] = useState([]);

  useEffect(() => {
    const getAllTorneos = async () => {
      try {
        const response = await axios.get(`${endpoint}/torneo`);
        setTorneo(response.data);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };

    getAllTorneos();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return { torneo };
};
export const deleteTorneo = async (torneoId) => {
    try {
      await axios.delete(`${endpoint}/torneo/${torneoId}`);
      // Optionally, handle any post-delete logic here
    } catch (error) {
      console.error('Error deleting tournament:', error);
    }
  };