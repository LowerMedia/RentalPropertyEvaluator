import React from 'react';
import FieldDataObject from '../rpe/fieldDataObject.js';

function Info() {
  return <section className='container py-6'>  
    <h2 className='is-size-3 has-text-black'><i>Calculation List</i></h2><br/>
    <p>
      <ul>
      {FieldDataObject.ResultsBoxFields.map(function(index) {
        return <li className="is-flex is-justify-content-flex-start is-vcentered">
          <div className="is-2 column pl-0"><strong className='is-size-4'>{index.labelText}</strong></div>
          <div className="column mt-2"> <small>({index.id}) = <i>{index.toolTip}</i></small></div>
        </li>;
      })}
      </ul>
    </p>
  </section>;
}

export default Info;