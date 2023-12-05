// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom border-primary">
      <Link to="/" className="navbar-brand">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/ShowTorneos" className="nav-link">Ver Torneos</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">Crear Torneos</Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
}
