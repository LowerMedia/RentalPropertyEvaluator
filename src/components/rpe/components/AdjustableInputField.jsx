import React from 'react';

export default class AdjustableInputField extends React.Component {
	constructor(props) {
		super(props);
		// console.log( this.props.id,  this.props.curState.changeable[this.props.id], this.props.curState.calculated[this.props.id])
		this.state = {
			value: (this.props.curState.changeable[this.props.id]) ? this.props.curState.changeable[this.props.id] : ( this.props.curState.calculated[this.props.id] ) ? this.props.curState.calculated[this.props.id] : "0"
		}
		this.childHandleFieldChange = this.childHandleFieldChange.bind(this);
	}
	async childHandleFieldChange(props, targetValue) {
		this.setState({value:targetValue});
		await this.props.handleFieldChange(props,targetValue);
	}
	render() {
		const classes = this.props.fieldType === "variableExpenseTotal" ? "disabled" : "adjustable";
		return(
			<div className='formItem flex space-between position-relative'>
				<label className="is-size-6" htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				<div className="position-relative">
					{ this.props.fieldType === 'variableExpense' ? <span className="calculatedValue">(${this.props.curState.calculated[this.props.id].toLocaleString()})</span> : null }
					{ this.props.numType === "currency" ? <span className="position-absolute number-symbol dollar">$</span> : null }
					<input className={classes} value={this.state.value} onChange={(e) => this.childHandleFieldChange(this.props.id,e.target.value)} type="text" id={this.props.id} data-testid={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`} />
					{ this.props.numType === "percentage" ? <span className="position-absolute number-symbol percentage">%</span> : null }
				</div>
			</div>
		)
	};
};