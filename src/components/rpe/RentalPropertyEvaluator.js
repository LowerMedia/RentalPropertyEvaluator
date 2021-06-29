import React 			from 'react';
import FieldDataObject  from './fieldDataObject'
import FieldsSection	from './components/FieldsSection';
import ResultsField		from './components/ResultsField';

class RentalPropertyEvaluator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			PurchasePrice: 0,
			TotalCashInvested: 0,
			RentPrice: 0,
			CashFlow: 0,
			CashFlowYearly: 0,
			CoCROI: 0,
			Cap: 0,
			TotalExpenses: 20,
			ResultsBox: 0,
			ValueField1: 0,
			ValueField2: 0,
		}
		this.handleFieldChange = this.handleFieldChange.bind(this);
		console.log('orig parent state ', this.state)
		this.resultsFields = FieldDataObject.ResultsBoxFields.map( (field,key) => <ResultsField key={key} result={this.state[field.id]} fieldTitle={field.id} />);
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
		await this.setState(
			{[inputChanged]: newValue}
		);
		await this.setState(
			{ResultsBox: ( parseInt( this.state.ValueField1 ) + parseInt( this.state.ValueField2 ) ) } 
		);
		console.log('parent state changed: ', this.state);
	}

	render() {
		return(
			<section className="flex space-between width-three-quarters flex-wrap">
				<FieldsSection sectionTitle={"Expenses"} handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} />
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} />
				<section className="FieldsSection side-padded">
					<h5 className='left'>Results</h5>
					{ FieldDataObject.ResultsBoxFields.map( (field,key) => <ResultsField key={key} result={this.state[field.id]} fieldTitle={field.id} />) }
				</section>
			</section>
		);
	}
}

export default RentalPropertyEvaluator;