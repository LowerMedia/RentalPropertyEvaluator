import React from 'react';

export default class ResultsField extends React.Component {
	render() {
		return(
			<div className='flex space-between mb-half results' data-ispassing={this.props.isPassing}>
				<label className="is-size-5 is-italic has-font-weight-bold tooltip" id={`${this.props.fieldTitle}-label`} htmlFor={this.props.fieldTitle}>
					{this.props.labelText}
					<div className="tooltiptext">{this.props.toolTip}</div>
				</label>
				<span className="is-size-5" id={this.props.fieldTitle} data-testid={`${this.props.fieldTitle}`}>{ (this.props.result) ? this.props.result.toFixed(2) : this.props.result}{ ( this.props.isPercentage ) ? "%" : ""}</span>
				{(this.props.monthYear) && <span className="is-size-5" id={`${this.props.fieldTitle}Yearly`} data-testid={`${this.props.fieldTitle}Yearly`}>{ (this.props.result) ? ( this.props.result * 12 ).toFixed(2): this.props.result * 12}{ ( this.props.isPercentage ) ? "%" : ""}</span>}
			</div>
		)
	}
}