import React 			from 'react';
import FieldDataObject  from './fieldDataObject'
import FieldsSection	from './components/FieldsSection';
import ResultsField		from './components/ResultsField';
import RPECalc			from './RPECalc';

class RentalPropertyEvaluator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {changeable: FieldDataObject.changeable, calculated:FieldDataObject.calculated};
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	async handleFieldChange(inputChanged, newValue) {
		await this.setState( ( prevState ) => {
			const newState = { ...prevState };
			newState.changeable[inputChanged] = parseInt( newValue );
			return newState;
		})
		await this.calcAllDynamically();
	}

	async calcAllDynamically(count = 2) {
		while ( count ) {
			await this.setState( ( prevState ) => {
				const newState = { ...prevState };
				for (var key of Object.keys(newState.calculated)) {
					newState.calculated[ key ] = RPECalc.[key](this.state);
				}
				return newState;
			})
			count--;
		}
		document.getElementById('TotalExpenses').value = this.state.calculated.TotalMonthlyExpenses.toFixed(2); // TODO: fix via passing updated state to input field
	}

	componentDidMount() {
		this.calcAllDynamically();
	}

	render() {
		return(
			<section className="flex space-between width-three-quarters flex-wrap">
				<FieldsSection sectionTitle={"Variable Expenses"} handleFieldChange={this.handleFieldChange} curState={this.state} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} />
				<FieldsSection sectionTitle={"Inputs"} handleFieldChange={this.handleFieldChange} curState={this.state} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} />
				<section className="FieldsSection side-padded width-one-fifth">
					<h5 className='left'>Results</h5>
					{ FieldDataObject.ResultsBoxFields.map( (field,key) => <ResultsField key={key} isPassing={(field.threshold)?(this.state.calculated[field.id] > field.threshold)?"true":"false":null} result={(this.state.calculated[field.id]) ? this.state.calculated[field.id] : this.state[field.id]} fieldTitle={field.id} labelText={field.labelText} monthYear={field.monthYear} isPercentage={field.isPercentage} />) }
				</section>
			</section>
		);
	}
}

export default RentalPropertyEvaluator;