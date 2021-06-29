import React from 'react';

export default class AdjustableInputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: (this.props.curVal) ? this.props.curVal : "0"};
		console.log(this.props.curVal);
	}
	componentDidMount() {
		document.getElementById(this.props.id).defaultValue = this.state.value;
	}
	render() {
		return(
			<div className='formItem flex space-between'>
				<label htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				<input onChange={(e) => this.props.handleFieldChange(this.props.id,e.target.value)} type="text" id={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`} />
			</div>
		)
	};
};