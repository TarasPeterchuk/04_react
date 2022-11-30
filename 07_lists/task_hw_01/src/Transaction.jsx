import React from 'react';
import moment from 'moment';

const Transaction = (transaction) => {
  // moment.locale('en-gb');
  return (
    <li className="transaction">
      <span className="transaction__date">
        {moment(transaction.time).format('D  MMM')}
      </span>
      <span className="transaction__time">
        {moment(transaction.time).format('HH:mm')}
      </span>
      <span className="transaction__assets">
        {transaction.from} → {transaction.to}
      </span>
      <span className="transaction__rate">{transaction.rate}</span>
      <span className="transaction__amount">
        {new Intl.NumberFormat('en-GB').format(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;
