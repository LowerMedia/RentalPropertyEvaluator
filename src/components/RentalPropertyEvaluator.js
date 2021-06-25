import React from 'react';

const EvalFormItem = ({id, labelText}) => {
	return(
		<div className='formItem flex space-between'>
			<label htmlFor={id} id={`${id}-ariaLabel`} >{labelText}</label>
			<input type="text" id={id} name={id} aria-labelledby={`${id}-ariaLabel`} />
		</div>
	);
}

const EvalForm = () => {
	return(
		<form className="RentalPropertyEvaluatorForm">
			<EvalFormItem id="PurchasePrice" labelText="Purchase Price: " />
			<EvalFormItem id="RentPrice" labelText="Estimated Rent: " />
			<EvalFormItem id="HOA" labelText="Yearly HOA: " />
			<EvalFormItem id="Taxes" labelText="Yearly Tax Estimate: " />
			<EvalFormItem id="PercentDown" labelText="Percent Down: " />
			<EvalFormItem id="InterestRate" labelText="Interest Rate: " />
		</form>
	);
}

const RentalPropertyEvaluator = () => {
	return(
		<section>
			<EvalForm />
		</section>
	);
};

export default RentalPropertyEvaluator;