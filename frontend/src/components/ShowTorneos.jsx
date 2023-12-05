import React from 'react';
import { useFetchTorneos, deleteTorneo } from './hooks/FetchTorneos';
import { Link } from 'react-router-dom';
import '../index.css';

export const ShowTorneos = () => {
  const { torneo } = useFetchTorneos();
  
  const handleDelete = async (torneoId) => {
    await deleteTorneo(torneoId);
    // Optionally, you can refresh the data after deleting
    // Example: const { torneo } = useFetchTorneos();
  };

  return (
    <>
      <div className='btn-container'>
        <Link to="/create" className='btn btn-success btn-lg text-white'>Create</Link>
      </div>
      <div className='table-container'>
        <table className='table table-striped'>
          <thead className='bg-primary text-white'>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {torneo.map((torneo) => (
              <tr key={torneo.id}>
                <td>{torneo.nombre}</td>
                <td>{torneo.fecha}</td>
                <td className='action-buttons'>
                  <Link to={`/edit/${torneo.id}`} className='btn btn-warning'>Editar</Link>
                  <button className='btn btn-danger' onClick={() => handleDelete(torneo.id)}>Eliminar</button>
                  <Link to={`/jugar/${torneo.id}`} className='btn btn-warning'>Jugar!</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
