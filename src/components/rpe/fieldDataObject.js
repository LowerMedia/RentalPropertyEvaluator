const FieldDataObject = {
	
	changeable: {
		CapEx:5,
		ClosingCosts: 3000,
		HOA: 0,
		Insurance:800,
		InterestRate: 4.5,
		LoanTerm: 30,
		MaintRepExpense:2.5,
		MiscExpense:2.5,
		MonthlyRent: 1000,
		PercentDown:20,
		PropMngtExpense:5,
		PurchasePrice: 100000,
		Taxes: 800,
		VacancyExpense:5,
	},

	calculated: {
		CapEx:0,
		MaintRepExpense:0,
		PropMngtExpense:0,
		MiscExpense:0,
		VacancyExpense:0,
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
		TotalExpensesMonthly:0,
		TotalExpensesYearly:0,
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
	],

	ExpenseFormFieldsArray: [
		{id:"CapEx",labelText:"Cap Ex",defaultValue:5,numType:"percentage",fieldType:"variableExpense"},
		{id:"MaintRepExpense",labelText:"Maint/Rep",defaultValue:2.5,numType:"percentage",fieldType:"variableExpense"},
		{id:"MiscExpense",labelText:"Misc",defaultValue:2.5,numType:"percentage",fieldType:"variableExpense"},
		{id:"PropMngtExpense",labelText:"PropMngt",defaultValue:5,numType:"percentage",fieldType:"variableExpense"},
		{id:"VacancyExpense",labelText:"Vacancy",defaultValue:5,numType:"percentage",fieldType:"variableExpense"},
		{id:"TotalPercentageExpensesEstimate",labelText:"Percentage Total",numType:"percentage",fieldType:"variableExpenseTotal"},
		{id:"HOA",labelText:"Yearly HOA: ",numType:"currency"},
		{id:"Taxes",labelText:"Yearly Tax Estimate: ",numType:"currency"},
		{id:"Insurance",labelText:"Yearly Insurance Estimate: ",numType:"currency"},
		{id:"TotalExpensesMonthly",labelText:"Total Monthly",numType:"currency",fieldType:"variableExpenseTotal"},
		{id:"TotalExpensesYearly",labelText:"Total Yearly",numType:"currency",fieldType:"variableExpenseTotal"},
	],
};

export default FieldDataObject;