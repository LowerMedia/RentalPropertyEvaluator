import React from 'react';

function formatCurrency(num, isNotCurrency = false, isYearly = false) {
	if ( isNotCurrency ) {
		return num;
	}
	num = isYearly ? num * 12 : num;
	let numArray = (""+num).split('.')[0].split('').reverse();
	for (var i = numArray.length; i > 0; i--) {
		var temp = i + 1;
		if ( ! ( ( temp % 3 ) - 1) % 3 ) {
			if (i != numArray.length) {
				numArray.splice(i,0,',');
			}
		}
	}
	return numArray.reverse().join('') + "." + ( (""+num).split('.')[1] ? (""+num).split('.')[1][0] + "" + (""+num).split('.')[1][1] : "00" );
}

export default class ResultsField extends React.Component {
	render() {
		return(
			<div className='flex space-between mb-half results' data-ispassing={this.props.isPassing}>
				<label className="is-size-5 is-italic has-font-weight-bold tooltip" id={`${this.props.fieldTitle}-label`} htmlFor={this.props.fieldTitle}>
					{this.props.labelText}
					<div className="tooltiptext">{this.props.toolTip}</div>
				</label>
				<span className="is-size-5" id={this.props.fieldTitle} data-testid={`${this.props.fieldTitle}`}>
					{ (this.props.result) ? formatCurrency(this.props.result) : formatCurrency(this.props.result)}{ ( this.props.isPercentage ) ? "%" : ""}
				</span>
				{(this.props.monthYear) && <span className="is-size-5" id={`${this.props.fieldTitle}Yearly`} data-testid={`${this.props.fieldTitle}Yearly`}>{ (this.props.result) ? ( formatCurrency(this.props.result,this.props.isPercentage,true) ): formatCurrency(this.props.result,this.props.isPercentage,true)}{ ( this.props.isPercentage ) ? "%" : ""}</span>}
			</div>
		)
	}
}