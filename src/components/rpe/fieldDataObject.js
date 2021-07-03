const FieldDataObject = {
	ResultsBoxFields: [
		{id:"CashFlow",labelText:"CashFlow"},
		{id:"CashFlowYearly",labelText:"CashFlowYearly"},
		{id:"CoCROI",labelText:"CoCROI",isPercentage:"true"},
		{id:"Cap",labelText:"Cap",isPercentage:"true"},
		{id:"NetOperatingIncome",labelText:"NetOperatingIncome"},
		{id:"TotalCashInvested",labelText:"TotalCashInvested"},
		{id:"MonthlyMortgagePayment",labelText:"MonthlyMortgagePayment"},
		{id:"DebtServiceCoverageRatio",labelText:"DebtServiceCoverageRatio"},
		{id:"TotalMonthlyIncome",labelText:"MonthlyIncome"},
		{id:"TotalYearlyIncome",labelText:"YearlyIncome"},
	],

	EvalFormFieldsArray: [
		{id:"MonthlyRent",labelText:"Estimated Rent: "},
		{id:"PurchasePrice",labelText:"Purchase Price: "},
		{id:"PercentDown",labelText:"Percent Down: "},
		{id:"InterestRate",labelText:"Interest Rate: "},
		{id:"LoanTerm",labelText:"Loan Term: "},
		{id:"ClosingCosts",labelText:"Closing Costs: "},
		{id:"HOA",labelText:"Yearly HOA: "},
		{id:"Taxes",labelText:"Yearly Tax Estimate: "},
	],

	ExpenseFormFieldsArray: [
		{id:"CapEx",labelText:"Cap Ex",defaultValue:5},
		{id:"MaintRepExpense",labelText:"Maint/Rep",defaultValue:2.5},
		{id:"MiscExpense",labelText:"Misc",defaultValue:2.5},
		{id:"PropMngtExpense",labelText:"PropMngt",defaultValue:5},
		{id:"VacancyExpense",labelText:"Vacancy",defaultValue:5},
		{id:"TotalExpenses",labelText:"Total"},
	],
};

export default FieldDataObject;