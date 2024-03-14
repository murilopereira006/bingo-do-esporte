import styled from 'styled-components'
import AthleteData from "../../../core/AthleteData"
import Card from "../Card";

const Table = styled.table`
  width: 100%;
  height: calc(100% - 100px);
  border-spacing: 10px;
`

interface CardContainer {
  data: AthleteData[];
}


const CardContainer: React.FC<CardContainer> = ({ data }) => {
  const rows: JSX.Element[] = [];
  let currentRow: JSX.Element[] = [];
  console.log("aaaaaaaaaaa ", data)

  data.forEach((item: AthleteData, index: number) => {
    currentRow.push(<Card content={item.Age} key={index} />);
    if ((index + 1) % 5 === 0 || index === data.length - 1) {
      rows.push(<tr key={index}>{currentRow}</tr>);
      currentRow = [];
    }
  });

  return (
    <Table>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
}

export default CardContainer;
