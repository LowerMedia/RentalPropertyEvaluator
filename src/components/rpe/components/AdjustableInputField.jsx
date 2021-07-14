import React from 'react';

export default class AdjustableInputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: (this.props.curState.changeable[this.props.id]) ? this.props.curState.changeable[this.props.id] : "0"};
		this.childHandleFieldChange = this.childHandleFieldChange.bind(this);
		this.inputBefore = ( this.props.numType === "currency" ) ? "$" : false;
		this.inputAfter = ( this.props.numType === "percentage" ) ? "%" : false;
	}
	async childHandleFieldChange(props, targetValue) {
		this.setState({value:targetValue});
		await this.props.handleFieldChange(props,targetValue);
	}
	render() {
		return(
			<div className='formItem flex space-between position-relative'>
				<label className="is-size-1" htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				
				<div className="position-relative">
					<span className="position-absolute number-symbol dollar">{this.inputBefore}</span>
					<input value={this.state.value} onChange={(e) => this.childHandleFieldChange(this.props.id,e.target.value)} type="text" id={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`} />
					<span className="position-absolute number-symbol percentage">{this.inputAfter}</span>
				</div>
			</div>
		)
	};
};