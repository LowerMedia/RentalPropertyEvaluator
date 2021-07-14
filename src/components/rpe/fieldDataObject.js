const FieldDataObject = {
	
	changeable: {
		CapEx:5,
		ClosingCosts: 0,
		HOA: 1000,
		Insurance:1000,
		InterestRate: 5,
		LoanTerm: 30,
		MaintRepExpense:2.5,
		MiscExpense:2.5,
		MonthlyRent: 1650,
		PercentDown:20,
		PropMngtExpense:5,
		PurchasePrice: 100000,
		Taxes: 1000,
		VacancyExpense:5,
	},

	calculated: {
		Cap: 0,
		CashFlow: 0,
		CashFlowYearly: 0,
		CoCROI: 0,
		DebtServiceCoverageRatio: 0,
		MonthlyMortgagePayment: 0,
		NetOperatingIncome: 0,
		TotalCashInvested: 0,
		TotalLoanAmount: 0,
		TotalMonthlyExpenses: 0,
		TotalMonthlyIncome: 0,
		TotalPercentageExpensesEstimate: 0,
		TotalYearlyIncome: 0,
		YearlyMortgagePayment: 0,
		EBDITA: 0,
	},

	ResultsBoxFields: [
		{id:"EBDITA",labelText:"EBDITA"},
		{id:"CoCROI",labelText:"CoCROI",isPercentage:"true",threshold:10},
		{id:"Cap",labelText:"Cap",isPercentage:"true",threshold:7.5},
		{id:"DebtServiceCoverageRatio",labelText:"DSCR",threshold:1.25},
		{id:"TotalCashInvested",labelText:"Cash Inv."},
		{id:"TotalLoanAmount",labelText:"Loan Amt"},
		{id:"NetOperatingIncome",labelText:"NOI", monthYear:true},
		{id:"CashFlow",labelText:"CashFlow", monthYear:true},
		{id:"TotalMonthlyIncome",labelText:"Income", monthYear:true},
		{id:"MonthlyMortgagePayment",labelText:"Mortgage", monthYear:true},
	],

	EvalFormFieldsArray: [
		{id:"MonthlyRent",labelText:"Estimated Rent: ",numType:"currency"},
		{id:"PurchasePrice",labelText:"Purchase Price: ",numType:"currency"},
		{id:"PercentDown",labelText:"Percent Down: ",numType:"percentage"},
		{id:"InterestRate",labelText:"Interest Rate: ",numType:"percentage"},
		{id:"LoanTerm",labelText:"Loan Term: ",numType:"currency"},
		{id:"ClosingCosts",labelText:"Closing Costs: ",numType:"currency"},
		{id:"HOA",labelText:"Yearly HOA: ",numType:"currency"},
		{id:"Taxes",labelText:"Yearly Tax Estimate: ",numType:"currency"},
		{id:"Insurance",labelText:"Yearly Insurance Estimate: ",numType:"currency"},
	],

	ExpenseFormFieldsArray: [
		{id:"CapEx",labelText:"Cap Ex",defaultValue:5,numType:"percentage"},
		{id:"MaintRepExpense",labelText:"Maint/Rep",defaultValue:2.5,numType:"percentage"},
		{id:"MiscExpense",labelText:"Misc",defaultValue:2.5,numType:"percentage"},
		{id:"PropMngtExpense",labelText:"PropMngt",defaultValue:5,numType:"percentage"},
		{id:"VacancyExpense",labelText:"Vacancy",defaultValue:5,numType:"percentage"},
		{id:"TotalExpenses",labelText:"Total",numType:"currency"},
	],
};

export default FieldDataObject;