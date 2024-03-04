import Logo from '../../../public/vite.svg'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100px;
  top: 0;
  background-color: #EADFB47D;
  border-radius: 0 0 20px 20px;
  position: absolute;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.25);
  box-sizing: border-box;

  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoClicable = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

const LogoStyled = styled.img`
  width: auto;
  height: 100%;
`

const StyledText = styled.h1`
  width: auto;
  height: 100%;
  margin: 0;
`

const GamesCategory = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: row;

  h3 {
    margin: 0;
    cursor: pointer;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <LogoClicable>
        <LogoStyled src={Logo} alt='Logo Bingo do Esporte' />
        <StyledText>Bingo do Esporte</StyledText>
      </LogoClicable>
      <GamesCategory>
        <h3>Olimpiadas</h3>
        <h3>Olimpiadas de inverno</h3>
        <h3>Futebol brasileiro</h3>
      </GamesCategory>
    </HeaderContainer>
  );
}
