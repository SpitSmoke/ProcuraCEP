import { FiSearch } from 'react-icons/fi';
import './styles.css';
import { useState } from 'react';
import api from './services/api.js';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === '') {
      alert('Por favor, digite algo para buscar');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch {
      alert('Erro ao buscar');
      setInput('');
    }
  }

  // Função para detectar a tecla Enter
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSearch(); // Chama a função handleSearch quando "Enter" é pressionado
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress} // Adiciona o evento de tecla
        />

        <button className="buttonSea" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2 className="titleMain">CEP: {cep.cep}</h2>
          <span>Logradouro: {cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Estado: {cep.estado}</span>
          <span>UF: {cep.uf}</span>
          <span>DDD: {cep.ddd}</span>
        </main>
      )}
    </div>
  );
}

export default App;
