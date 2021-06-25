import React from 'react';

export default class AdjustableInputField extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {value: (this.props.defaultValue) ? this.props.defaultValue : "0"};
	}
	componentDidMount() {
		document.getElementById(this.props.id).value = this.state.value;
	}
	changeEventHandler(event) {
		console.log(event.target.id);
		if (event.target.id === 'RentPrice') {
			document.getElementById('CashFlow').value = 
			event.target.value - ( event.target.value * ( .01 * parseInt( document.getElementById('TotalExpenses').value ) ) );
		}
		// if (event.target.id == 'PurchasePrice') {

		// }
	}
	render() {
		return(
			<div className='formItem flex space-between'>
				<label htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				<input onChange={(e)=>this.changeEventHandler(e)} type="text" id={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`} />
			</div>
		)
	};
};