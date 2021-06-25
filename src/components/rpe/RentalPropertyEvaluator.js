import React 		from 'react';
import ExpenseForm  from './components/ExpenseForm';
import AdjustableInputField  from './components/AdjustableInputField';

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
				<AdjustableInputField id="RentPrice" labelText="Estimated Rent: " />
				<AdjustableInputField id="PurchasePrice" labelText="Purchase Price: " />
				<hr/>
				<AdjustableInputField id="PercentDown" labelText="Percent Down: " />
				<AdjustableInputField id="InterestRate" labelText="Interest Rate: " />
				<hr/>
				<AdjustableInputField id="HOA" labelText="Yearly HOA: " />
				<AdjustableInputField id="Taxes" labelText="Yearly Tax Estimate: " />
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
				<AdjustableInputField id="CashFlow" labelText="CashFlow" />
				<AdjustableInputField id="CoCROI" labelText="CoC ROI" />
				<AdjustableInputField id="Cap" labelText="Cap" />
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