import Header from "./components/Header"
import GameFrame from "./components/GameFrame"
import styled from 'styled-components'

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
  return (
    <Container>
      <Header />      
      <GameFrame />
    </Container>
  )
}

export default App
