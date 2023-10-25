import React, { useState } from 'react';
import './event-registration-styles.css';
import api from '../../api/api';

function EventRegistration() {
  const [event, setEvent] = useState({
    nome: '',
    data: '',
    local: '',
    esporte: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/eventos', event);
      console.log('Evento cadastrado com sucesso:', response.data);
      // Você pode adicionar código aqui para lidar com o sucesso, como redirecionar o usuário.
    } catch (error) {
      console.error('Erro ao cadastrar o evento:', error);
      // Você pode adicionar código aqui para lidar com o erro.
    }
  };

  return (
    <div className="event-form">
      <h1>Cadastro de Eventos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome do Evento"
            value={event.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="data">Data:</label>
          <input
            type="date"
            id="data"
            name="data"
            value={event.data}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="local">Local:</label>
          <input
            type="text"
            id="local"
            name="local"
            placeholder="Local do Evento"
            value={event.local}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="esporte">Esporte:</label>
          <input
            type="text"
            id="esporte"
            name="esporte"
            placeholder="Tipo de Esporte"
            value={event.esporte}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            rows="3"
            placeholder="Descrição do Evento"
            value={event.descricao}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar Evento</button>
      </form>
    </div>
  );
}

export default EventRegistration;
