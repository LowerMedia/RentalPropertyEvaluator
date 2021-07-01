const RPECalc = {
	cashflow: (income, expenses) => {
		return income - expenses;
	},

	cocroi: (totalInvestment, yearlyIncome) => {
		return ( yearlyIncome / totalInvestment ) * 100; // TODO: ( ( ( Gross Rent ) + ( Other Income) ) - ( Vacancy + Operating Expenses + Annual Mortgage Payments ) ) / Total Cash Invested
	},

	cap: (netOperatingIncome, PurchasePrice) => {
		return netOperatingIncome / PurchasePrice;
	},

	monthlymortgage: (interest,term,loanAmount) => {
		return ( loanAmount * interest * Math.pow( ( 1 + interest ), term ) ) / ( Math.pow( ( 1 + interest), term) - 1 );
	},

	dtir: () => {
		// debt to income ratio
	},

	noi: () => {
		// net operating income
	},
};
export default RPECalc;