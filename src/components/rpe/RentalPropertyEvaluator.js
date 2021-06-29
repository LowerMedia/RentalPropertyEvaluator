import React 			from 'react';
import FieldDataObject  from './fieldDataObject'
import FieldsSection	from './components/FieldsSection';
import ResultsField		from './components/ResultsField';

class RentalPropertyEvaluator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				PurchasePrice: 0,
				RentPrice: 0,
				CashFlow: 0,
				CoCROI: 0,
				Cap: 0,
				TotalExpenses: 20,
			},
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
				'CashFlow': ( newValue - ( newValue * ( .01 * parseInt( this.state.values.TotalExpenses ) ) ) ),
			});
			await this.setState({
				'CashFlowYearly': ( this.state.CashFlow * 12 )
			});
		}
		if (inputChanged === 'PurchasePrice') {
			await this.setState({
				'CoCROI': ( this.state.CashFlowYearly / ( 0.2 * this.state.PurchasePrice ) )
			});
		}
		await this.setState(
			{[inputChanged]: newValue}
		);
		await this.setState(
			{ResultsBox: ( parseInt( this.state.ValueField1 ) + parseInt( this.state.ValueField2 ) ) } 
		);
		// await this.setState({})
		console.log('parent state changed: ', this.state);
	}

	render() {
		return(
			<section className="flex space-between width-three-quarters flex-wrap">
				{/*<section className="width-full mb-3">
					{this.resultsFields}
				</section>*/}
				<section className="width-full mb-3 mt-3">
					<ResultsField  result={this.state.CashFlow} fieldTitle={'CashFlow'} />
					<ResultsField  result={this.state.CashFlowYearly} fieldTitle={'CashFlowYearly'} />
					<ResultsField  result={this.state.CoCROI} fieldTitle={'CoCROI'} />
				</section>
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} />
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} />
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="RentalPropertyEvaluatorResultsBox" fieldsArray={FieldDataObject.ResultsBoxFields} />
			</section>
		);
	}
}

export default RentalPropertyEvaluator;