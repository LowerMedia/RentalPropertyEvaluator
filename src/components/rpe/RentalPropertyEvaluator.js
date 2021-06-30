import React 			from 'react';
import FieldDataObject  from './fieldDataObject'
import FieldsSection	from './components/FieldsSection';
import ResultsField		from './components/ResultsField';
import RPECalc			from './RPECalc';

class RentalPropertyEvaluator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			PurchasePrice: 100000,
			ClosingCosts: 0,
			TotalCashInvested: 0,
			RentPrice: 1000,
			NetOperatingIncome: 0,
			CashFlow: 0,
			CashFlowYearly: 0,
			CoCROI: 0,
			Cap: 0,
			TotalExpenses: 20,
		}
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	async handleFieldChange(inputChanged, newValue) {

		await this.setState({
			[inputChanged]: parseInt( newValue )
		});
		this.calculateAll();
	}

	calculateAll() {
		this.setState( ( prevState ) => {
			const newState = { ...prevState };
			newState.TotalCashInvested = newState.PurchasePrice + newState.ClosingCosts;
			newState.CashFlowYearly = RPECalc.cashflow( ( newState.RentPrice * 12 ), ( ( newState.TotalExpenses * .01 ) * ( newState.RentPrice * 12 ) ) );
			newState.CashFlow = newState.CashFlowYearly / 12;
			newState.CoCROI = RPECalc.cocroi(newState.TotalCashInvested, newState.CashFlowYearly);
			newState.Cap = RPECalc.cap(newState.CashFlowYearly, newState.PurchasePrice);
			return newState;
		})
	}

	componentDidMount() {
		this.calculateAll();
	}

	render() {
		return(
			<section className="flex space-between width-three-quarters flex-wrap">
				<FieldsSection sectionTitle={"Expenses"} handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} />
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} />
				<section className="FieldsSection side-padded width-one-fifth">
					<h5 className='left'>Results</h5>
					{ FieldDataObject.ResultsBoxFields.map( (field,key) => <ResultsField key={key} result={this.state[field.id]} fieldTitle={field.id} isPercentage={field.isPercentage} />) }
				</section>
			</section>
		);
	}
}

export default RentalPropertyEvaluator;