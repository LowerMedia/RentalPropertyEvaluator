const RPECalc = {

	// TODO: add calcs and results fields for IRR (internal rate of return), 50% rule, and 1% rule
	// TODO: fix CoCROI to account for taxes (should be cashflow BEFORE taxes are accounted for)
	// TODO: alpha sort or break down income/expense/other and then alpha sort

	EBDITA: (state) => {
		return 99;
		// totalIncomeYearly + totalTaxesPaidYearly + totalMortgageInterestPaidYearly + totalDeprectiationCostsYearly + totalAmoritizationCostsYearly
	},

	CashFlow: (state) => {
		return state.calculated.TotalMonthlyIncome - state.calculated.TotalMonthlyExpenses;
	},
	
	CashFlowYearly: (state) => {
		return state.calculated.CashFlow * 12;
	},
	
	CapEx: (state) => {
		return state.changeable.MonthlyRent * ( state.changeable.CapEx * .01 );
	},
	
	MaintRepExpense: (state) => {
		return state.changeable.MonthlyRent * ( state.changeable.MaintRepExpense * .01 );
	},
	
	PropMngtExpense: (state) => {
		return state.changeable.MonthlyRent * ( state.changeable.PropMngtExpense * .01 );
	},
	
	MiscExpense: (state) => {
		return state.changeable.MonthlyRent * ( state.changeable.MiscExpense * .01 );
	},
	
	VacancyExpense: (state) => {
		return state.changeable.MonthlyRent * ( state.changeable.VacancyExpense * .01 );
	},

	TotalMonthlyIncome: (state) => {
		return state.changeable.MonthlyRent;
	},

	TotalYearlyIncome: (state) => {
		return state.changeable.MonthlyRent * 12;
	},

	TotalPercentageExpensesEstimate: (state) => {
		return ( state.changeable.CapEx + state.changeable.MaintRepExpense + state.changeable.MiscExpense + state.changeable.PropMngtExpense + state.changeable.VacancyExpense );
	},

	TotalExpensesYearly: (state) => {
		return ( 12 * ( state.changeable.Insurance / 12 ) + ( state.changeable.HOA / 12 ) + ( state.changeable.Taxes / 12 ) + ( state.calculated.TotalMonthlyIncome * ( state.calculated.TotalPercentageExpensesEstimate * 0.01 ) ) ); // whole number int generated by percentage of income;
	},

	TotalExpensesMonthly: (state) => {
		return ( state.changeable.Insurance / 12 ) + ( state.changeable.HOA / 12 ) + ( state.changeable.Taxes / 12 ) + ( state.calculated.TotalMonthlyIncome * ( state.calculated.TotalPercentageExpensesEstimate * 0.01 ) ); // whole number int generated by percentage of income;
	},

	TotalMonthlyExpenses: (state) => {
		return ( state.changeable.Insurance / 12 ) + ( state.changeable.HOA / 12 ) + ( state.changeable.Taxes / 12 ) + ( state.calculated.TotalMonthlyIncome * ( state.calculated.TotalPercentageExpensesEstimate * 0.01 ) ); // whole number int generated by percentage of income;
	},

	MonthlyIncome: (state) => {
		return state.calculated.TotalMonthlyIncome; // TODO: add var for other sources of income (parking, etc)
	},

	MonthlyMortgagePayment: (state) => {
		return ( state.calculated.TotalLoanAmount * ( ( state.changeable.InterestRate * 0.01 ) / 12 ) * Math.pow( ( 1 + ( ( state.changeable.InterestRate * 0.01 ) / 12 ) ), ( state.changeable.LoanTerm * 12 ) ) ) / ( Math.pow( ( 1 + ( ( state.changeable.InterestRate * 0.01 ) / 12 )), ( state.changeable.LoanTerm * 12 )) - 1 );
	},

	YearlyMortgagePayment: (state) => {
		return state.calculated.MonthlyMortgagePayment * 12;
	},

	DebtServiceCoverageRatio: (state) => { // debt to income ratio - cash flow available for debt service / total debt service
		return state.calculated.CashFlowYearly / state.calculated.YearlyMortgagePayment;
	},

	Cap: (state) => { // capitalization rate
		return ( state.calculated.CashFlowYearly / state.changeable.PurchasePrice ) * 100;
	},

	CoCROI: (state) => { // cash on cash return on investment
		return ( state.calculated.CashFlowYearly / state.calculated.TotalCashInvested ) * 100; // TODO: ( ( ( Gross Rent ) + ( Other Income) ) - ( Vacancy + Operating Expenses + Annual Mortgage Payments ) ) / Total Cash Invested
	},

	NetOperatingIncome: (state) => { // net operating income
		return state.calculated.TotalMonthlyIncome - state.calculated.TotalMonthlyExpenses;
	},

	TotalLoanAmount: (state) => {
		return ( state.changeable.PurchasePrice + state.changeable.ClosingCosts ) - ((state.changeable.PurchasePrice + state.changeable.ClosingCosts) * ( 0.01 * state.changeable.PercentDown ) );
	},

	TotalCashInvested: (state) => {
		return ((state.changeable.PurchasePrice + state.changeable.ClosingCosts) * ( 0.01 * state.changeable.PercentDown ) );
	}
};
export default RPECalc;