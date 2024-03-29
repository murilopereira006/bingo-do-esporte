import AthleteData from "../../core/AthleteData"
import CardContainer from "../CardContainer";
import CardHeader from "../CardHeader";
import styled from 'styled-components';


const BoxContainer = styled.div`
  width: 500px;
  height: 600px;
  background-color: #EADFB4;
  border: 3px solid #F6995C;
  border-radius: 20px;
`;

interface GameFrameProps {
  data: AthleteData[] | string;
}

const GameFrame: React.FC<GameFrameProps> = ({ data }) => {
  return (
    <BoxContainer>
      <CardHeader />
      <CardContainer data={data} />
    </BoxContainer>
  );
}

export default GameFrame;
