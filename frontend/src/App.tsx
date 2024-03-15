import { useEffect, useState } from 'react';
import AthleteData from "./core/AthleteData"
import Header from "./components/Header";
import GameFrame from "./components/GameFrame";
import styled from 'styled-components';
import fetchDataFromLocalServer from './api';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
`;

function App() {
  const [data, setData] = useState<AthleteData[] | string >([]); // Definindo o estado para armazenar os dados

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchDataFromLocalServer();
        setData(fetchedData);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados:', error);
      }
    };

    getData();
  }, [])

  return (
    <Container>
      <Header />
      <GameFrame data={data} />
    </Container>
  );
}

export default App;
