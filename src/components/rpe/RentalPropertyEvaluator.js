import React 				from 'react';
import FieldDataObject  	from './fieldDataObject.js'
import FieldsSection		from './components/FieldsSection';

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
				TotalExpenses: 20,
				ValueField1: 0,
				ValueField2: 0,
				ValueField3: 0
			}
		}
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	handleFieldChange() {
		console.log('RentalPropertyEvaluator class change handler fired');
	}

	render() {
		return(
			<section className="flex space-between width-three-quarters">
				<FieldsSection defaultValue={this.state.values} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} changeHandler={this.handleFieldChange()} />
				<FieldsSection defaultValue={this.state.values} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} changeHandler={this.handleFieldChange()} />
				<FieldsSection defaultValue={this.state.values} sectionId="RentalPropertyEvaluatorResultsBox" fieldsArray={FieldDataObject.ResultsBoxFields} changeHandler={this.handleFieldChange()} />
			</section>
		);
	}
}

export default RentalPropertyEvaluator;