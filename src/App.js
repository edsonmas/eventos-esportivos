import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./components/Home";
import EventRegistration from "./components/EventSport/EventRegistration";
import EventList from "./components/EventList";


function App() {
  return (
    <Router>
      <div className="wrapper">
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
              <Link to="/cadastrar-evento">Cadastro de Eventos</Link>
            </li>
            <li>
              <Link to="/lista-eventos">Lista de Eventos</Link>
            </li>
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar-evento" element={<EventRegistration />} />
            <Route path="/lista-eventos" element={<EventList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
