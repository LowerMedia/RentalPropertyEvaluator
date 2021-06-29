import React from 'react';

export default class ResultsField extends React.Component {
	render() {
		return(
			<div>
				<label id={`${this.props.fieldTitle}-label`} for={this.props.fieldTitle}>{this.props.fieldTitle}</label>
				<span id={this.props.fieldTitle}>{this.props.result}</span>
			</div>
		)
	}
}