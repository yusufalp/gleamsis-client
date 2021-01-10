import React from 'react';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const Expenditure = (props) => {
  return (
    <div className='expenditure'>
      <p className='description'>{props.expenditure.description}</p>
      <p className='description'>{formatter.format(props.expenditure.budget)}</p>
      <p className='description'>{formatter.format(props.expenditure.actual)}</p>
    </div>
  );
}

export default Expenditure;