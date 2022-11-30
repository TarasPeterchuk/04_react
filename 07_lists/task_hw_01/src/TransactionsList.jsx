import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          from={transaction.from}
          to={transaction.to}
          amount={transaction.amount}
          rate={transaction.rate}
          time={transaction.time}
        />
      ))}
    </ul>
  );
};

export default TransactionsList;

{
  /* <ul className="transactions">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          amount={transaction.amount}
          {...transaction}
        />
      ))}
    </ul> */
}
