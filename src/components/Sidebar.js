import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/OpenAI_Logo_%28vertical%29.svg"
          alt="SportsEvents Logo"
        />
      </div>
      <ul>
        <li>
          <Link to="/">Início (Dashboard)</Link>
        </li>
        <li>
          <Link to="/event-registration">Cadastro de Eventos</Link>
        </li>
        <li>
          <Link to="/event-list">Lista de Eventos</Link>
        </li>
        <li>
          <Link to="/participant-registration">Inscrição de Participantes</Link>
        </li>
        <li>
          <Link to="/participant-list">Lista de Participantes</Link>
        </li>
        <li>
          <Link to="/results-registration">Registro de Resultados</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <a href="#">Sair</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
