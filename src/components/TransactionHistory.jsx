import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 15px;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 500px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const Thead = styled.thead`
  background-color: #4df3ff;
  height: 40px;
`;

const Trow = styled.tr`
  height: 40px;
`;

const TrowList = styled.tr`
  background-color: #fff;
  :not(:nth-child(odd)) {
    background-color: #cacaca;
  }
`;
const Cell = styled.td`
  padding: 5px;
`;

export default function TransactionsHistory({ items }) {
  return (
    <Section>
      <Table>
        <Thead>
          <Trow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </Trow>
        </Thead>

        <tbody>
          {items.map((item) => (
            <TrowList key={item.id}>
              <Cell>{item.type}</Cell>
              <Cell>{item.amount}</Cell>
              <Cell>{item.currency}</Cell>
            </TrowList>
          ))}
        </tbody>
      </Table>
    </Section>
  );
}
