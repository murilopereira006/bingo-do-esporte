import styled from 'styled-components'

interface CardProps {
    content: number;
    rightAnswer: boolean;
}

const CardStyled = styled.td<{ rightAnswer: boolean }>`
  width: 80px;
  height: 80px;
  background-color: ${props => props.rightAnswer ? 'green' : 'red'};
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;

  text-align: center;
  margin: 50px;
  padding: 10px;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
`
const Card: React.FC<CardProps> = ({ content, rightAnswer }) => {
    return (<CardStyled rightAnswer={rightAnswer}>
        <Content>{content}</Content>
    </CardStyled>);
};
  
export default Card;
