import axios from "axios";

// URL base para requisições ao ViaCEP
const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
});

// Exportando a instância da API para uso em outros arquivos
export default api;
