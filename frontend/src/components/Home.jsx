import React from 'react'
import { ShowTorneos } from './ShowTorneos';
import { Link } from 'react-router-dom';
import '../index.css'
export const Home = () => {
    return (
      <>
        <h1>HOLA!</h1>
        <h1>Bienvenido a nuestro gestor de torneos!</h1>
        <h1>¿Qué deseas hacer?</h1>
        {/* Utiliza Link para navegar a la página ShowTorneos */}
        <Link to="/ShowTorneos"className='btn btn-succes'>Ver Torneos</Link>
      </>
    );
  };