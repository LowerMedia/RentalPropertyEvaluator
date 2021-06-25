import React 		from 'react';
import EvalFormItem from './components/EvalFormItem';
import ResultItem   from './components/ResultItem';
import ExpenseForm  from './components/ExpenseForm';

class calculations {
	CashFlow = (incomes, expenses) => {
		return incomes - expenses;
	}
}

class EvalForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<form className="RentalPropertyEvaluatorForm is-padded">
				<EvalFormItem id="RentPrice" labelText="Estimated Rent: " />
				<EvalFormItem id="PurchasePrice" labelText="Purchase Price: " />
				<hr/>
				<EvalFormItem id="PercentDown" labelText="Percent Down: " />
				<EvalFormItem id="InterestRate" labelText="Interest Rate: " />
				<hr/>
				<EvalFormItem id="HOA" labelText="Yearly HOA: " />
				<EvalFormItem id="Taxes" labelText="Yearly Tax Estimate: " />
			</form>
		);
	}
}

class ResultsBox extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="RentalPropertyEvaluatorResultsBox">
				<ResultItem id="CashFlow" labelText="CashFlow" resultText="10%" />
				<ResultItem id="CoCROI" labelText="CoC ROI" resultText="10%" />
				<ResultItem id="Cap" labelText="Cap" resultText="10%" />
			</div>
		);
	}
}

class RentalPropertyEvaluator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				PurchasePrice: 0,
				EstimatedRent: 0,
				CashFlow: 0,
				CoCROI: 0,
				Cap: 0,
				TotalExpenses: 20
			}
		}
	}

	render() {
		return(
			<section className="flex space-between width-half">
				<ExpenseForm props={this.state.values} />
				<EvalForm props={this.state.values} />
				<ResultsBox />
			</section>
		);
	}
}

export default RentalPropertyEvaluator;