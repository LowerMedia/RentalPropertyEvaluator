const FieldDataObject = {
	ResultsBoxFields: [
		{id:"CoCROI",					timeBased: false, labelText:"CoCROI",	isPercentage:"true"},
		{id:"Cap",						timeBased: false, labelText:"Cap",		isPercentage:"true"},
		{id:"DebtServiceCoverageRatio",	timeBased: false, labelText:"Debt Service Coverage Ratio"},
		{id:"CashFlow",					timeBased: true,  labelText:"CashFlow"},
		{id:"CashFlowYearly",			timeBased: false, labelText:"Cash Flow Yearly"},
		{id:"NetOperatingIncome",		timeBased: false, labelText:"Net Operating Income"},
		{id:"TotalCashInvested",		timeBased: false, labelText:"Total Cash Invested"},
		{id:"MonthlyMortgagePayment",	timeBased: false, labelText:"Monthly Mortgage Payment"},
		{id:"Mortgage",					timeBased: true,  labelText:"Mortgage Payment"},
		{id:"TotalMonthlyIncome",		timeBased: false, labelText:"Monthly Income"},
		{id:"TotalYearlyIncome",		timeBased: false, labelText:"Yearly Income"},
		{id:"EBDITA",					timeBased: false, labelText:"EBDITA"},
	],

	EvalFormFieldsArray: [
		{id:"MonthlyRent",labelText:"Estimated Rent: ",numType:"currency"},
		{id:"PurchasePrice",labelText:"Purchase Price: ",numType:"currency"},
		{id:"PercentDown",labelText:"Percent Down: ",numType:"currency"},
		{id:"InterestRate",labelText:"Interest Rate: ",numType:"percentage"},
		{id:"LoanTerm",labelText:"Loan Term: ",numType:"currency"},
		{id:"ClosingCosts",labelText:"Closing Costs: ",numType:"currency"},
		{id:"HOA",labelText:"Yearly HOA: ",numType:"currency"},
		{id:"Taxes",labelText:"Yearly Tax Estimate: ",numType:"currency"},
	],

	ExpenseFormFieldsArray: [
		{id:"CapEx",			labelText:"Cap Ex",		numType:"percentage"},
		{id:"MaintRepExpense",	labelText:"Maint/Rep",	numType:"percentage"},
		{id:"MiscExpense",		labelText:"Misc",		numType:"percentage"},
		{id:"PropMngtExpense",	labelText:"PropMngt",	numType:"percentage"},
		{id:"VacancyExpense",	labelText:"Vacancy",	numType:"percentage"},
		{id:"TotalExpenses",	labelText:"Total",		numType:"currency"},
	],
};

export default FieldDataObject;