import React from 'react';

export default class AdjustableInputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ( this.props.inputType === "checkbox" ) 
			? this.props.curState.changeable[this.props.id] : (this.props.curState.changeable[this.props.id]) 
			? this.props.curState.changeable[this.props.id] : ( this.props.curState.calculated[this.props.id] ) 
			? this.props.curState.calculated[this.props.id] : "0"
		}
		this.checkKeyPress = this.checkKeyPress.bind(this);
		this.onCheckboxToggle = this.onCheckboxToggle.bind(this);
		this.childHandleFieldChange = this.childHandleFieldChange.bind(this);
	}
	checkKeyPress(event) { // this prevents any non numbers from being entered
        if (!/[0-9.]/.test(event.key)) {
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
	getSymbolHtml(type) {
		return <span className={"position-absolute number-symbol " + type}>{type === 'currency' ? "$" : type === 'years' ? "yrs" : "%"}</span>;
	}
	displayBeforeSymbol(type) {
		return ( type === "currency" ) ? this.getSymbolHtml(type) : '';
	}
	displayAfterSymbol(type) {
		return ( type === "percentage" ) ? this.getSymbolHtml(type) : type === "years" ? this.getSymbolHtml(type) : '';
	}
	displayCalculatedValue(props) {
		let calculatedValue = props.id === 'TotalPercentageExpensesEstimate' && props.curState.calculated.TotalDollarExpensesEstimate ? props.curState.calculated.TotalDollarExpensesEstimate : props.fieldType === 'variableExpense' ? props.curState.calculated[props.id] : null;
		return ( calculatedValue === null ) ? '' : <span className="calculatedValue">({calculatedValue.toFixed(2)})</span>;			
	}
	render() {
		return(
			<div className='formItem flex space-between position-relative mb-2'>
				<label className="is-size-6" htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				<div className="formItemFieldWrap is-flex position-relative">
					{ this.displayCalculatedValue(this.props) }
					{ this.displayBeforeSymbol(this.props.numType) }
					{ this.props.inputType === "checkbox" ? <input defaultValue={this.state.value} type={this.props.inputType} id="IncludeClosingCostsInMortgage" checked={this.state.value} onChange={(e)=>this.onCheckboxToggle(e,this.props)} />: null }
					{ this.props.inputType !== "checkbox" ? <input defaultValue={this.state.value} type="number" id={this.props.id} onKeyPress={(e) => this.checkKeyPress(e)} onChange={(e) => this.childHandleFieldChange(this.props.id,e.target.value,e)} data-testid={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`} className={this.props.fieldType === "variableExpenseTotal" ? "disabled" : "adjustable"} /> : null }
					{ this.displayAfterSymbol(this.props.numType) }
				</div>
			</div>
		)
	};
};