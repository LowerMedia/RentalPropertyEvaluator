import React from 'react';

export default class AdjustableInputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: (this.props.curVal.[this.props.id]) ? this.props.curVal.[this.props.id] : "0"};
		this.childHandleFieldChange = this.childHandleFieldChange.bind(this);
	}
	componentDidMount() {
		document.getElementById(this.props.id).defaultValue = this.state.value;
	}
	async childHandleFieldChange(props, targetValue) {
		await this.props.handleFieldChange(props,targetValue);
	}
	render() {
		return(
			<div className='formItem flex space-between'>
				<label className="is-size-1" htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				<input onChange={(e) => this.childHandleFieldChange(this.props.id,e.target.value)} type="text" id={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`} />
			</div>
		)
	};
};