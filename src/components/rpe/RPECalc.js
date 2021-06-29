const RPECalc = {
	cashflow: (income, expenses) => {
		console.log('calcing now ', income, expenses);
		return income - expenses;
	},

	cocroi: (totalInvestment, yearlyIncome) => {
		return ( yearlyIncome / totalInvestment ) * 100;
		// ( ( ( Gross Rent ) + ( Other Income) ) - ( Vacancy + Operating Expenses + Annual Mortgage Payments ) ) / Total Cash Invested
	},

	cap: (netOperatingIncome, PurchasePrice) => {
		return netOperatingIncome / PurchasePrice;
	},
};
export default RPECalc;