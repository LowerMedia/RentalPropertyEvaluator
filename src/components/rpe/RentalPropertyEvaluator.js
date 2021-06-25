import React from 'react';
import EvalFormItem from './components/EvalFormItem';
import ResultItem from './components/ResultItem';

const EvalForm = () => {
	return(
		<form className="RentalPropertyEvaluatorForm is-padded">
			<EvalFormItem id="PurchasePrice" labelText="Purchase Price: " />
			<EvalFormItem id="PurchasePrice" labelText="Purchase Price: " />
			<EvalFormItem id="RentPrice" labelText="Estimated Rent: " />
			<EvalFormItem id="HOA" labelText="Yearly HOA: " />
			<EvalFormItem id="Taxes" labelText="Yearly Tax Estimate: " />
			<EvalFormItem id="PercentDown" labelText="Percent Down: " />
			<EvalFormItem id="InterestRate" labelText="Interest Rate: " />
		</form>
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