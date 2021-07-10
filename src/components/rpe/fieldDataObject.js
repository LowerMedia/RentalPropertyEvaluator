const FieldDataObject = {
	ResultsBoxFields: [
		{id:"EBDITA",labelText:"EBDITA"},
		{id:"CoCROI",labelText:"CoCROI",isPercentage:"true"},
		{id:"Cap",labelText:"Cap",isPercentage:"true"},
		{id:"DebtServiceCoverageRatio",labelText:"DebtServiceCoverageRatio"},
		{id:"TotalCashInvested",labelText:"TotalCashInvested"},
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