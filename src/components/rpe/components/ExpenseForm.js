import React from 'react';

class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.TotalExpenses = this.props.props.TotalExpenses;
	}
	render() {
		return(
			<div>
				<div className="flex space-between">
					<label>Cap Ex</label>
					<strong>5%</strong>
				</div>
				<div className="flex space-between">
					<label>Maint/Rep</label>
					<strong>2.5%</strong>
				</div>
				<div className="flex space-between">
					<label>Misc</label>
					<strong>2.5%</strong>
				</div>
				<div className="flex space-between">
					<label>PropMngt</label>
					<strong>5%</strong>
				</div>
				<div className="flex space-between">
					<label>Vacancy</label>
					<strong>5%</strong>
				</div>
				<hr/>
				<div className="flex space-between">
					<label>Total</label>
					<strong id="TotalExpenses">{this.TotalExpenses}%</strong>
				</div>
			</div>
		)
	}
}

export default ExpenseForm;