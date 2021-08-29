import React from 'react';

function Info() {
  return <section className='container py-6'>  
    <h2 className='is-size-3 has-text-black'>Calculation List</h2>
    <p>
      <ul>
        <li><strong>GrossRentMultiplier</strong> = PurchasePrice / TotalMonthlyIncome</li>
      </ul>
    </p>
  </section>;
}

export default Info;