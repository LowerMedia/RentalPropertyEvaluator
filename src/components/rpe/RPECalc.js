const RPECalc = {

	// TODO: add calcs and results fields for IRR (internal rate of return), PITI
	// TODO: fix CoCROI to account for taxes (should be cashflow BEFORE taxes are accounted for)
	// TODO: alpha sort or break down income/expense/other and then alpha sort
	// TODO: add deprec and amort costs
	// TODO: fix ability to make incl in mortgage toggler false by default

	EBDITA: (state) => {
		return state.calculated.CashFlowYearly + state.changeable.Taxes + state.calculated.TotalInterestPaidYearly + 0 + 0;// todo: add deprec and amort costs
		//return totalIncomeYearly + totalTaxesPaidYearly + totalMortgageInterestPaidYearly + totalDeprectiationCostsYearly + totalAmoritizationCostsYearly (amorit costs aren't applicable in RE)
	},

	GrossRentMultiplier: (state) => {
		return ( state.changeable.PurchasePrice / state.calculated.TotalMonthlyIncome );
	},

	OnePercentRule: (state) => {
		return ( ( state.calculated.TotalMonthlyIncome / state.changeable.PurchasePrice ) * 100 );
	},

	TotalInterestPaidMonthly: (state) => {
		return state.changeable.PurchasePrice * ( state.changeable.InterestRate * 0.01 );
	},

	TotalInterestPaidYearly: (state) => {
		return 12 * ( state.changeable.PurchasePrice * ( state.changeable.InterestRate * 0.01 ) );
	},

	TotalInterestPaid: (state) => {
		return state.calculated.TotalInterestPaidMonthly * state.changeable.LoanTerm;
	},

	LoanTermMonths: (state) => {
		return state.changeable.LoanTerm * 12;
	},

	CashFlow: (state) => {
		return state.calculated.TotalMonthlyIncome - state.calculated.TotalMonthlyExpenses - state.calculated.MortgagePayment;
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

	TotalDollarExpensesEstimate: (state) => {
		return state.calculated.TotalMonthlyIncome * ( state.calculated.TotalPercentageExpensesEstimate * 0.01 );
	},

	TotalExpensesYearly: (state) => {
		return ( 12 * ( state.changeable.Insurance / 12 ) + ( state.changeable.HOA / 12 ) + ( state.changeable.OtherExpense / 12 ) + ( state.changeable.Taxes / 12 ) + ( state.calculated.TotalDollarExpensesEstimate ) ); // whole number int generated by percentage of income;
	},

	TotalExpensesMonthly: (state) => {
		return ( state.changeable.Insurance / 12 ) + ( state.changeable.HOA / 12 ) + ( state.changeable.OtherExpense / 12 ) + ( state.changeable.Taxes / 12 ) + ( state.calculated.TotalDollarExpensesEstimate ); // whole number int generated by percentage of income;
	},

	TotalMonthlyExpenses: (state) => {
		return ( state.changeable.Insurance / 12 ) + ( state.changeable.HOA / 12 ) + ( state.changeable.OtherExpense / 12 ) + ( state.changeable.Taxes / 12 ) + ( state.calculated.TotalDollarExpensesEstimate ); // whole number int generated by percentage of income;
	},

	MonthlyIncome: (state) => {
		return state.calculated.TotalMonthlyIncome; // TODO: add var for other sources of income (parking, etc)
	},

	MortgagePayment: (state) => {
		return ( state.calculated.TotalLoanAmount * ( ( state.changeable.InterestRate * 0.01 ) / 12 ) * Math.pow( ( 1 + ( ( state.changeable.InterestRate * 0.01 ) / 12 ) ), ( state.calculated.LoanTermMonths ) ) ) / ( Math.pow( ( 1 + ( ( state.changeable.InterestRate * 0.01 ) / 12 )), ( state.changeable.LoanTerm * 12 )) - 1 );
	},

	YearlyMortgagePayment: (state) => {
		return state.calculated.MortgagePayment * 12;
	},

	DebtServiceCoverageRatio: (state) => { // debt to income ratio - cash flow available for debt service / total debt service
		return ( state.calculated.NetOperatingIncome * 12 ) / state.calculated.YearlyMortgagePayment;
	},

	Cap: (state) => { // capitalization rate
		return ( ( state.calculated.NetOperatingIncome * 12 ) / state.changeable.PurchasePrice ) * 100;
	},

	CoCROI: (state) => { // cash on cash return on investment
		return ( state.calculated.CashFlowYearly / state.calculated.TotalCashInvested ) * 100; // TODO: ( ( ( Gross Rent ) + ( Other Income) ) - ( Vacancy + Operating Expenses + Annual Mortgage Payments ) ) / Total Cash Invested
	},

	NetOperatingIncome: (state) => { // net operating income
		return state.calculated.TotalMonthlyIncome - state.calculated.TotalMonthlyExpenses;
	},

	TotalLoanAmount: (state) => {
		const closingCosts = state.changeable.IncludeClosingCostsInMortgage ? state.changeable.ClosingCosts : 0;
		return ( state.changeable.PurchasePrice + closingCosts ) - ((state.changeable.PurchasePrice + closingCosts) * ( 0.01 * state.changeable.PercentDown ) );
	},

	TotalCashInvested: (state) => {
		return state.changeable.ClosingCosts + ((state.changeable.PurchasePrice ) * ( 0.01 * state.changeable.PercentDown ) );
	}
};
export default RPECalc;