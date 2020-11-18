import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 15px;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 500px;
`;
const Thead = styled.thead`
  background-color: #4df3ff;
  height: 40px;
`;

const Trow = styled.tr`
  height: 40px;
`;

const TrowList = styled.tr`
  :not(:nth-child(odd)) {
    background-color: #bebebe;
  }
`;
const Tbody = styled.tbody``;

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

        <Tbody>
          {items.map((item) => (
            <TrowList key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </TrowList>
          ))}
        </Tbody>
      </Table>
    </Section>
  );
}
