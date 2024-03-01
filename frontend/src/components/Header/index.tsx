import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100px;
  top: 0;
  background-color: #EADFB4;
  border-radius: 0 0 20px 20px;
  position: absolute;
  box-sizing: border-box;
`
export default function Header() {
  return (
    <HeaderContainer>
      Header
    </HeaderContainer>
  );
}
