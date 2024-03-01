import Card from "../Card";
import CardHeader from "../CardHeader"
import styled from 'styled-components'

const BoxContainer = styled.div`
  width: 500px;
  height: 600px;
  background-color: #EADFB4;
  border: 3px solid #F6995C;
  border-radius: 20px;
`

export default function GameFrame() {
  return (
    <BoxContainer>
      <CardHeader />
      <Card />
    </BoxContainer>
  );
}
