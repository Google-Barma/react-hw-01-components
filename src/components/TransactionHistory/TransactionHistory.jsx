import React from "react";
import propTypes from "prop-types";
import {
  Section,
  Table,
  Thead,
  Trow,
  TrowList,
  Cell,
} from "./Transactions.styled";

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

TransactionsHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};
