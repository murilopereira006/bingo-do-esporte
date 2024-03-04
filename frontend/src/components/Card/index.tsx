import styled from 'styled-components'

interface CardProps {
    content: number;
}

const CardStyled = styled.td`
  width: 90px;
  height: 90px;
  background-color: red;
  border-radius: 5px;
  box-sizing: border-box;

  text-align: center;
`
const Card: React.FC<CardProps> = ({ content }) => {
    return <CardStyled>{content}</CardStyled>;
};
  
export default Card;
