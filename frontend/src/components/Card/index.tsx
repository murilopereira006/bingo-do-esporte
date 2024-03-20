import styled from 'styled-components'

interface CardProps {
  content: ContentProps;
  rightAnswer: boolean;
}

interface ContentProps {
  image_composition: Test[];
  name: string;
}

interface Test {
  image_url: string;
}

const CardStyled = styled.td<{ rightAnswer: boolean }>`
  width: 80px;
  height: 80px;
  background-color: ${props => props.rightAnswer ? '#497174' : '#EB6440'};
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
  background-color: #CAEDFF;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
`
const Card: React.FC<CardProps> = ({ content, rightAnswer }) => {
  console.log(content)
    return (<CardStyled rightAnswer={rightAnswer}>
        <Content>
          <img style={{ width: '50px', height: '50px' }} src={content.image_composition[0].image_url} alt={content.name} />
          <img style={{ width: '50px', height: '50px' }} src={content.image_composition[1].image_url} alt={content.name} />
        </Content>
    </CardStyled>);
};
  
export default Card;
