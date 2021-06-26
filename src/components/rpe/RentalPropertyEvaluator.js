import React 		from 'react';
import AdjustableInputField  from './components/AdjustableInputField';

class calculations {
	CashFlow = (incomes, expenses) => {
		return incomes - expenses;
	}
}

// function calculate(equation = 'CashFlow', inputs = []) {
// 	if (equation === 'CashFlow') {
// 		return inputs[0] - inputs[1];
// 	}
// 	if (equation === 'CAP') {
// 		return inputs[0] - inputs[1];
// 	}
// }

class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.TotalExpenses = this.props.props.TotalExpenses;
	}
	render() {
		return(
			<section id='ExpenseSection' className='ExpenseSection side-padded'>
				<form>
					<AdjustableInputField id="CapEx" labelText="Cap Ex" defaultValue="5" />
					<AdjustableInputField id="MaintRepExpense" labelText="Maint/Rep" defaultValue={2.5} />
					<AdjustableInputField id="MiscExpense" labelText="Misc" defaultValue={2.5} />
					<AdjustableInputField id="PropMngtExpense" labelText="PropMngt" defaultValue={5} />
					<AdjustableInputField id="VacancyExpense" labelText="Vacancy" defaultValue={5} />
					<hr/>
					<AdjustableInputField id="TotalExpenses" labelText="Total" defaultValue={this.props.props.TotalExpenses} />
				</form>
			</section>
		)
	}
}

class EvalForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<section className="RentalPropertyEvaluatorForm is-padded">
				<form>
					<AdjustableInputField id="RentPrice" labelText="Estimated Rent: " />
					<AdjustableInputField id="PurchasePrice" labelText="Purchase Price: " />
					<hr/>
					<AdjustableInputField id="PercentDown" labelText="Percent Down: " />
					<AdjustableInputField id="InterestRate" labelText="Interest Rate: " />
					<hr/>
					<AdjustableInputField id="HOA" labelText="Yearly HOA: " />
					<AdjustableInputField id="Taxes" labelText="Yearly Tax Estimate: " />
				</form>
			</section>
		);
	}
}

class ResultsBox extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<section className="RentalPropertyEvaluatorResultsBox side-padded">
				<form>
					<AdjustableInputField id="CashFlow" labelText="CashFlow" />
					<AdjustableInputField id="CoCROI" labelText="CoC ROI" />
					<AdjustableInputField id="Cap" labelText="Cap" />
				</form>
			</section>
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
			<section className="flex space-between width-three-quarters">
				<ExpenseForm props={this.state.values} />
				<EvalForm props={this.state.values} />
				<ResultsBox />
			</section>
		);
	}
}

export default RentalPropertyEvaluator;