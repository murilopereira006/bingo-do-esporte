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
`
export default function Header() {
  return (
    <HeaderContainer>
      Header
    </HeaderContainer>
  );
}
