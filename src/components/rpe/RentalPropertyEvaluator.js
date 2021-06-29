import React 				from 'react';
import FieldDataObject  	from './fieldDataObject.js'
import FieldsSection		from './components/FieldsSection';

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
			ResultsBox: 0,
			ValueField1: 0,
			ValueField2: 0,
		}
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	async handleFieldChange(inputChanged, newValue) {
		console.log(inputChanged, newValue, 'we have changed')
		if (inputChanged === 'RentPrice') {
			document.getElementById('CashFlow').value = newValue - ( newValue * ( .01 * parseInt( this.state.values.TotalExpenses ) ) );
		}
		await this.setState({[inputChanged]: newValue});
		await this.setState( {ResultsBox: ( parseInt( this.state.ValueField1 ) + parseInt( this.state.ValueField2 ) ) } );
		console.log(this.state);
	}

	render() {
		return(
			<section className="flex space-between width-three-quarters">
				Results Here: {this.state.ResultsBox}
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state.values} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} />
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state.values} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} />
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state.values} sectionId="RentalPropertyEvaluatorResultsBox" fieldsArray={FieldDataObject.ResultsBoxFields} />
			</section>
		);
	}
}

export default RentalPropertyEvaluator;