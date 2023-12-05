import React from 'react';
import { useFetchParticipante } from './hooks/useFetchParticipante';
import { Link } from 'react-router-dom';
export const ShowParticipante = ({ torneoId }) => {
  const { participante } = useFetchParticipante(torneoId);
  const handleDelete = async (participanteId) => {
    alert('¿Seguro quieres eliminar el participante?');
    // Agrega lógica para eliminar el participante según participanteId
  };

  return (
    <div className='table-container'>
      <table className='table table-striped' style={{ width: '80%', fontSize: '14px' }}>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {participante.map((participante) => (
            <tr key={participante.id}>
              <td>{participante.nombre}</td>
              <td className='action-buttons'>
                <Link to={`/edit-participante${participante.id}`} className='btn btn-warning'>
                  Editar
                </Link>
                <button className='btn btn-danger' onClick={() => handleDelete(participante.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
