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
			}
		}
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	handleFieldChange(inputChanged, newValue) {
		if (inputChanged === 'RentPrice') {
			document.getElementById('CashFlow').value = newValue - ( newValue * ( .01 * parseInt( this.state.values.TotalExpenses ) ) );
		}
	}

	render() {
		return(
			<section className="flex space-between width-three-quarters">
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state.values} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} />
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state.values} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} />
				<FieldsSection handleFieldChange={this.handleFieldChange} curVal={this.state.values} sectionId="RentalPropertyEvaluatorResultsBox" fieldsArray={FieldDataObject.ResultsBoxFields} />
			</section>
		);
	}
}

export default RentalPropertyEvaluator;