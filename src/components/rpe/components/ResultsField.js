import React from 'react';

export default class ResultsField extends React.Component {
	render() {
		return(
			<div className='flex space-between'>
				<label id={`${this.props.fieldTitle}-label`} htmlFor={this.props.fieldTitle}>{this.props.fieldTitle}</label>
				<span id={this.props.fieldTitle}>{this.props.result}{ ( this.props.isPercentage ) ? "%" : ""}</span>
			</div>
		)
	}
}