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
};
export default RPECalc;