import axios from 'axios';
import AthleteData from "../core/AthleteData"

const urlBase: string = import.meta.env.VITE_BASE_API_URL

async function fetchDataFromLocalServer(): Promise<AthleteData[] | string > {
    try {
        const response = await axios.get<AthleteData[]>(urlBase);
        return response.data; // Não é necessário fazer casting pois já especificamos o tipo genérico na chamada do axios
    } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados da API:', error);
        return "Nao deu"; // Em caso de erro, retorna um array vazio
    }
}

export default fetchDataFromLocalServer;
