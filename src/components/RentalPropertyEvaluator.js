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
		<form className="RentalPropertyEvaluatorForm is-padded">
			<EvalFormItem id="PurchasePrice" labelText="Purchase Price: " />
			<EvalFormItem id="RentPrice" labelText="Estimated Rent: " />
			<EvalFormItem id="HOA" labelText="Yearly HOA: " />
			<EvalFormItem id="Taxes" labelText="Yearly Tax Estimate: " />
			<EvalFormItem id="PercentDown" labelText="Percent Down: " />
			<EvalFormItem id="InterestRate" labelText="Interest Rate: " />
		</form>
	);
}

const ResultItem = ({id, labelText, resultText}) => {
	return(
		<div className='formItem flex space-between'>
			<label htmlFor={id} id={`${id}-ariaLabel`} >{labelText}</label>
			<span id={id} name={id} aria-labelledby={`${id}-ariaLabel`}>{resultText}</span>
		</div>

	);
}

const ResultsBox = () => {
	return(
		<div className="RentalPropertyEvaluatorResultsBox">
			<ResultItem id="CashFlow" labelText="CashFlow" resultText="10%" />
			<ResultItem id="CoCROI" labelText="CoC ROI" resultText="10%" />
			<ResultItem id="Cap" labelText="Cap" resultText="10%" />
		</div>
	);
}

const RentalPropertyEvaluator = () => {
	return(
		<section>
			<EvalForm />
			<br/>
			<ResultsBox />
		</section>
	);
};

export default RentalPropertyEvaluator;