import React from 'react';

class EvalFormItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value:"0"};
	}
	calculate(event) {
		console.log(event.target.value);
		document.getElementById('CashFlow').innerText = event.target.value;
	}
	render() {
		return(
			<div className='formItem flex space-between'>
				<label htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				<input onChange={(e)=>this.calculate(e)} type="text" id={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`} />
			</div>
		)
	};
}

export default EvalFormItem;