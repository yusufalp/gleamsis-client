import React from 'react';
import Expenditure from './Expenditure';
import './Expenditure.css';

const expenditures = [
  {
    id: 0,
    description: 'Teacher Salary',
    budget: 86000,
    actual: 87432,
  },
  {
    id: 1,
    description: 'Books',
    budget: 23135,
    actual: 23246,
  },
  {
    id: 2,
    description: 'Sanitation',
    budget: 2500,
    actual: 4500,
  },
  {
    id: 3,
    description: 'Lunch',
    budget: 3453,
    actual: 3453,
  },
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

export default function ExpenditureTable() {
  const renderedExpenditure = expenditures.map(expenditure => (
    <Expenditure key={expenditure.id} expenditure={expenditure} />
  ));

  const totalBudget = expenditures.reduce((acc, cur) => {
    return acc + cur.budget
  }, 0);

  const totalActual = expenditures.reduce((acc, cur) => {
    return acc + cur.actual
  }, 0);

  return (
    <div className='comp-main'>
      <h3>Expenditure</h3>
      <div className='expenditure'>
        <p className='title'>Description</p>
        <p className='title'>Budget</p>
        <p className='title'>Actual</p>
      </div>
      {renderedExpenditure}
      <div className='expenditure'>
        <p className='title actual'>TOTAL</p>
        <p className='title actual'>{formatter.format(totalBudget)}</p>
        <p className='title actual'>{formatter.format(totalActual)}</p>
      </div>
    </div>
  );
}