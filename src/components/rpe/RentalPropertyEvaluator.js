import React 			from 'react';
import FieldDataObject  from './fieldDataObject'
import FieldsSection	from './components/FieldsSection';
import ResultsField		from './components/ResultsField';
import RPECalc			from './RPECalc';

class RentalPropertyEvaluator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// changeable
			PurchasePrice: 100000, // moved below to changeable
			ClosingCosts: 1000, // moved below to changeable
			RentPrice: 1000, // moved below to changeable
			CapEx:5,
			MaintRepExpense:2.5, // moved below to changeable
			MiscExpense:2.5, // moved below to changeable
			PropMngtExpense:5, // moved below to changeable
			VacancyExpense:5, // moved below to changeable
			TotalExpenses: 0,
			HOA: 1200, // moved below to changeable
			Taxes: 1000, // moved below to changeable
			InterestRate:5, // moved below to changeable
			PercentDown:20,
			LoanTerm:30, // moved below to changeable
			// calculated
			MonthlyIncome: 0, // moved below, changed name
			YearlyIncome: 0,
			TotalCashInvested: 0, // moved below to calculated
			NetOperatingIncome: 0,
			CashFlow: 0, // moved below to calculated
			CashFlowYearly: 0, // moved below to calculated
			CoCROI: 0,
			Cap: 0,
			MonthlyMortgagePayment:0, // moved below to calculated
			DebtServiceCoverageRatio: 0,
			MonthlyExpenses: 0,
			//
			changeable: {
				PurchasePrice: 99000,
				ClosingCosts: 1000,
				MonthlyRent: 1000,
				InterestRate: 5,
				LoanTerm: 30,
				CapEx:5,
				MaintRepExpense:2.5,
				MiscExpense:2.5,
				PropMngtExpense:5,
				VacancyExpense:5,
				HOA: 1200,
				Taxes: 1000,
			},
			calculated: {
				TotalCashInvested: 0,
				TotalMonthlyIncome: 0,
				TotalYearlyIncome: 0,
				CashFlow: 0,
				CashFlowYearly: 0,
				TotalMonthlyExpenses: 0,
				MonthlyMortgagePayment: 0,
				TotalPercentageExpensesEstimate: 0,
			}
		}
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	async handleFieldChange(inputChanged, newValue) {
		await this.setState({ [inputChanged]: parseInt( newValue ) });
		this.calculateAll();
	}

	calculateAll() {
		this.setState( ( prevState ) => {
			const newState = { ...prevState };
			newState.TotalExpenses = ( newState.CapEx + newState.MaintRepExpense + newState.MiscExpense + newState.PropMngtExpense + newState.VacancyExpense );
			newState.MonthlyIncome = newState.RentPrice;
			newState.YearlyIncome = newState.MonthlyIncome * 12;
			newState.MonthlyExpenses = ( newState.YearlyIncome * newState.TotalExpenses );
			newState.TotalCashInvested = ( newState.PurchasePrice * ( newState.PercentDown * 0.01 ) ) + newState.ClosingCosts;
			newState.CashFlowYearly = RPECalc.cashflow( ( newState.RentPrice * 12 ), ( ( newState.TotalExpenses * .01 ) * ( newState.RentPrice * 12 ) ) );
			newState.CashFlow = newState.CashFlowYearly / 12;
			newState.CoCROI = RPECalc.cocroi(newState.TotalCashInvested, newState.CashFlowYearly);
			newState.Cap = RPECalc.cap(newState.CashFlowYearly, newState.PurchasePrice);
			newState.MonthlyMortgagePayment = RPECalc.monthlymortgage( ( ( this.state.InterestRate * .01 ) / 12 ),( this.state.LoanTerm * 12 ), this.state.PurchasePrice);
			newState.DebtServiceCoverageRatio = RPECalc.DebtServiceCoverageRatio( newState.MonthlyMortgagePayment, newState.MonthlyIncome, newState.MonthlyExpenses);
			return newState;
		})
	}

	async calcAllDynamically() {

		console.log(this.state.calculated);
		await this.setState( ( prevState ) => {
			const newState = { ...prevState };
			for (var key of Object.keys(newState.calculated)) {
				newState.calculated[ key ] = RPECalc.[key](this.state);
			}
			return newState;
		})

		console.log(this.state.calculated);

	}

	componentDidMount() {
		this.calculateAll();
		this.calcAllDynamically();
	}

	render() {
		return(
			<section className="flex space-between width-three-quarters flex-wrap">
				<FieldsSection sectionTitle={"Variable Expenses"} handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="ExpenseSection" fieldsArray={FieldDataObject.ExpenseFormFieldsArray} />
				<FieldsSection sectionTitle={"Inputs"} handleFieldChange={this.handleFieldChange} curVal={this.state} sectionId="RentalPropertyEvaluatorForm" fieldsArray={FieldDataObject.EvalFormFieldsArray} />
				<section className="FieldsSection side-padded width-one-fifth">
					<h5 className='left'>Results</h5>
					{ FieldDataObject.ResultsBoxFields.map( (field,key) => <ResultsField key={key} result={(this.state.calculated[field.id]) ? this.state.calculated[field.id] : this.state[field.id]} fieldTitle={field.id} isPercentage={field.isPercentage} />) }
				</section>
			</section>
		);
	}
}

export default RentalPropertyEvaluator;