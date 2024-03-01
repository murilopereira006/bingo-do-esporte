import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #9BB0C1;
  border-radius: 18px 18px 0 0;
  padding: 20px;
  box-sizing: border-box;
`

const Name = styled.div`

`

const Aka = styled.h2`
  color: #3f5a67;
  margin: 0;
`

const SubName = styled.h3`
  color: #51829B;
  margin: 0;
`

const Pass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Timer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: black;
`

const ButtonNext = styled.span`
  color: #fff;
  margin: 0;
`

export default function CardHeader() {
  return (
    <Container>
      <Name>
        <SubName>Angelo</SubName>
        <Aka>Romero</Aka>
      </Name>
      <Pass>
        <Timer />
        <ButtonNext>
          Proximo
        </ButtonNext>
      </Pass>
    </Container>
  );
}
