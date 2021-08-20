import React from 'react';

export default class AdjustableInputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ( this.props.inputType === "checkbox" ) ? this.props.curState.changeable[this.props.id] : (this.props.curState.changeable[this.props.id]) ? this.props.curState.changeable[this.props.id] : ( this.props.curState.calculated[this.props.id] ) ? this.props.curState.calculated[this.props.id] : "0"
		}
		this.checkKeyPress = this.checkKeyPress.bind(this);
		this.onCheckboxToggle = this.onCheckboxToggle.bind(this);
		this.childHandleFieldChange = this.childHandleFieldChange.bind(this);
	}
	checkKeyPress(event) { // this prevents any non numbers from being entered
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
	}
	async childHandleFieldChange(props, targetValue) {
		this.setState({value:targetValue});
		await this.props.handleFieldChange(props,targetValue);
	}
    async onCheckboxToggle(event,props) {
    	await this.setState({ value: event.target.checked })
        this.props.curState.changeable[event.target.id] = event.target.checked
		await this.props.handleFieldChange(props,this.state.value);
    }
	render() {
		const classes = this.props.fieldType === "variableExpenseTotal" ? "disabled" : "adjustable";
		return(
			<div className='formItem flex space-between position-relative mb-2'>
				<label className="is-size-6" htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				<div className="formItemFieldWrap is-flex position-relative">
					{ this.props.id === 'TotalPercentageExpensesEstimate' && this.props.curState.calculated.TotalDollarExpensesEstimate ? <span className="calculatedValue">(${this.props.curState.calculated.TotalDollarExpensesEstimate})</span> : null }
					{ this.props.fieldType === 'variableExpense' ? <span className="calculatedValue">(${this.props.curState.calculated[this.props.id]})</span> : null }
					{ this.props.numType === "currency" ? <span className="position-absolute number-symbol dollar">$</span> : null }
					
					{ this.props.inputType === "checkbox" ? <span className='checkbox-wrap is-size-7 is-block'><input id="IncludeClosingCostsInMortgage" checked={this.state.value} value={this.state.value} type={this.props.inputType} onChange={(e)=>this.onCheckboxToggle(e,this.props)} /></span> : null }
				
					{this.props.inputType !== "checkbox" ? <input className={classes} value={this.state.value} onKeyPress={(e) => this.checkKeyPress(e)} onChange={(e) => this.childHandleFieldChange(this.props.id,e.target.value,e)} type="number" id={this.props.id} data-testid={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`} /> : null }
					
					{ this.props.numType === "percentage" ? <span className="position-absolute number-symbol percentage">%</span> : null }
					{ this.props.numType === "years" ? <span className="position-absolute number-symbol years">yrs</span> : null }
				</div>
			</div>
		)
	};
};