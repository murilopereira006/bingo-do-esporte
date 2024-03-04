import Card from "../Card";
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  height: calc(100% - 100px);
`

const teste = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

export default function CardContainer() {
  const rows: JSX.Element[] = [];
  let currentRow: JSX.Element[] = [];

  teste.forEach((item: number, index: number) => {
    currentRow.push(<Card content={item} key={index} />);
    if ((index + 1) % 5 === 0 || index === teste.length - 1) {
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
