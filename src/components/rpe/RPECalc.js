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

	monthlymortgage: (interestYearly,termYears,loanAmount) => {
		let term = termYears * 12;
		let interest = ( interestYearly * 0.01 ) / 12;
		let monthlyPaymentAmount = loanAmount * ( interest * ( Math.pow( ( 1 + interest ), term ) ) / Math.pow( ( 1 + interest ), term ) - 1 );
		// P = L[c(1 + c)^n]/[(1 + c)^n - 1]
		// P= payment
		// L= loan amount
		// C= interest
		// N= number of mortgage payments
		return monthlyPaymentAmount;
	},

	dtir: () => {
		// debt to income ratio
	},

	noi: () => {
		// net operating income
	},
};
export default RPECalc;