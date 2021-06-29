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
		console.log('orig parent state ', this.state);
	}

	async handleFieldChange(inputChanged, newValue) {
		console.log(inputChanged, newValue, 'we have changed')
		if (inputChanged === 'RentPrice') {
			await this.setState({
				'CashFlow': ( newValue - ( newValue * ( .01 * parseInt( this.state.TotalExpenses ) ) ) ),
			});
			await this.setState({
				'CashFlowYearly': ( this.state.CashFlow * 12 )
			});
		}
		if (inputChanged === 'PurchasePrice') {
			await this.setState({
				'CoCROI': ( this.state.CashFlowYearly / ( this.state.PurchasePrice ) )
			});
		}
		if (inputChanged === 'TotalExpenses') {
			await this.setState({
				'CashFlow': ( this.state.RentPrice - ( this.state.RentPrice * ( .01 * parseInt( newValue ) ) ) ),
			});
			await this.setState({
				'CashFlowYearly': ( this.state.CashFlow * 12 )
			});
		}
		console.log('parent state changed: ', this.state);
	}

	calculateAll() {
		this.setState((prevState)=>{
			console.log(prevState);
			const newState = { ...prevState };
			newState.TotalCashInvested = newState.PurchasePrice + newState.ClosingCosts;
			newState.CashFlowYearly = RPECalc.cashflow( ( newState.RentPrice * 12 ), ( ( newState.TotalExpenses * .01 ) * ( newState.RentPrice * 12 ) ) );
			newState.CashFlow = newState.CashFlowYearly / 12;
			newState.CoCROI = RPECalc.cocroi(newState.TotalCashInvested, newState.CashFlowYearly);
			// newState.NetOperatingIncome = this.calculateNOI(newState.CashFlowYearly, newState.CashFlow);
			newState.Cap = RPECalc.cap(newState.CashFlowYearly, newState.PurchasePrice);
			return newState;
		})
		console.log('component mounted, running calcs', this.state);
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