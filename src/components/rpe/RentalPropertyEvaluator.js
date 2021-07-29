import React 			from 'react';
import FieldDataObject  from './fieldDataObject'
import FieldsSection	from './components/FieldsSection';
import ResultsField		from './components/ResultsField';
import LocalStorage		from './components/LocalStorage';
import RPECalc			from './RPECalc';

class RentalPropertyEvaluator extends React.Component {
	constructor(props) {
		super(props);
		this.state = localStorage.getItem('rpeCalculationsSet') ? {changeable: JSON.parse( localStorage.getItem('changeableRPE') ), calculated: JSON.parse( localStorage.getItem('calculatedRPE') )} : {changeable: FieldDataObject.changeable, calculated:FieldDataObject.calculated}
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
					try {
						newState.calculated[ key ] = RPECalc.[key](this.state);
					} catch(err) {
						console.error(key, err);
					}
				}
				return newState;
			})
			count--;
		}
		this.saveStateToLocalStorage();

		try {
			document.getElementById('TotalExpensesMonthly').value = this.state.calculated.TotalExpensesMonthly.toFixed(2); // TODO: fix via passing updated state to input field
			document.getElementById('TotalExpensesYearly').value = this.state.calculated.TotalExpensesYearly.toFixed(2); // TODO: fix via passing updated state to input field
			document.getElementById('TotalPercentageExpensesEstimate').value = this.state.calculated.TotalPercentageExpensesEstimate.toFixed(2); // TODO: fix via passing updated state to input field
		} catch(err) {
			console.error(err);
		}
	}

	componentDidMount() {
		this.calcAllDynamically(3);
		console.log('cur state ', this.state);
	}

	saveStateToLocalStorage() {
		if ( ! localStorage.getItem('rpeCalculationsSet')) {
			localStorage.setItem('rpeCalculationsSet', true);
			localStorage.setItem('changeableRPE', JSON.stringify( FieldDataObject.changeable ));
			localStorage.setItem('calculatedRPE', JSON.stringify( FieldDataObject.calculated ));
		} else {
			localStorage.setItem('changeableRPE', JSON.stringify( this.state.changeable ));
			localStorage.setItem('calculatedRPE', JSON.stringify( this.state.calculated ));
		}
	}

	async resetStateToDefaults() {
		await this.setState({changeable: FieldDataObject.changeable, calculated:FieldDataObject.calculated});
		await this.calcAllDynamically(2);
		for (var key of Object.keys(this.state.changeable)) {
			document.getElementById(key).value = this.state.changeable[key]; // TODO: fix via passing updated state to input field
		}
	}

	resetLocalStorage() {
		localStorage.clear();
		this.resetStateToDefaults();
	}

	render() {
		return(
			<section className="columns is-multiline container column width-full">
				<section className="grid space-between flex-wrap columns container mr-0">
					<FieldsSection PurchasePrice={this.state.changeable.PurchasePrice} sectionTitle={"Income & Mortgage"} handleFieldChange={this.handleFieldChange} curState={this.state} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} />
					<FieldsSection PurchasePrice={this.state.changeable.PurchasePrice} sectionTitle={"Expenses"} handleFieldChange={this.handleFieldChange} curState={this.state} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} />
					<section className="FieldsSection side-padded width-one-fifth column py-0 is-5 resultsBox has-background-white">
						<h3 className='left is-size-4 is-italic has-font-weight-bold title-border'>Results</h3>
						{ FieldDataObject.ResultsBoxFields.map( (field,key) => <ResultsField key={key} isPassing={(field.threshold)?(this.state.calculated[field.id] > field.threshold)?"true":"false":null} result={(this.state.calculated[field.id]) ? this.state.calculated[field.id] : this.state[field.id]} toolTip={field.toolTip} fieldTitle={field.id} labelText={field.labelText} monthYear={field.monthYear} isPercentage={field.isPercentage} />) }
					</section>
				</section>
				<section className="grid space-between flex-wrap column is-full">
					<LocalStorage resetLocalStorage={() => this.resetLocalStorage()} />
				</section>
			</section>
		);
	}
}

export default RentalPropertyEvaluator;
