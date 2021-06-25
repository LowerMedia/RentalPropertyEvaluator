import React from 'react';

export default class AdjustableInputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value:"0"};
	}
	componentDidMount() {
		document.getElementById(this.props.id).value = 0;
	}
	changeEventHandler(event) {
		console.log(event.target.id);
		if (event.target.id === 'RentPrice') {
			document.getElementById('CashFlow').innerText = 
			event.target.value - ( event.target.value * ( .01 * parseInt( document.getElementById('TotalExpenses').innerText ) ) );
			document.getElementById('CashFlow').value = 
			event.target.value - ( event.target.value * ( .01 * parseInt( document.getElementById('TotalExpenses').innerText ) ) );
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