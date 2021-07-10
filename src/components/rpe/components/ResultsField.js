import React from 'react';

class Result extends React.Component {
	constructor(props) {
		super(props)
		this.endSymbol = (this.props.isPercentage) ? "%" : "";
		this.curVal = (this.props.yearly === 'true') ? this.props.resultValue * 12 : this.props.resultValue;
	}
	render() {
		return (
			<div className='column'><span  className="is-size-1" id={this.props.resultId}>{this.curVal.toFixed(2)} {this.endSymbol}</span></div>
		)
	}
}

export default class ResultsField extends React.Component {
	constructor(props){
		super(props)
		this.addYearlyOutput = (this.props.fieldTimeBased) ? <Result yearly="true" resultId={this.props.fieldId} resultValue={this.props.result} isPercentage={this.props.isPercentage} /> : "";
	}
	render() {
		return(
			<div className='flex space-between mb-half results-column-container'>
				<div className='column'><label className="is-size-1" id={`${this.props.fieldId}-label`} htmlFor={this.props.fieldTitle}>{this.props.fieldTitle}</label></div>
				<Result yearly="false" resultId={this.props.fieldId} resultValue={this.props.result} isPercentage={this.props.isPercentage} />
				{this.addYearlyOutput}
			</div>
		)
	}
}