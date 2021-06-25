import React from 'react';

class ResultItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value:0};
	}
	render() {
		return(
			<div className='formItem flex space-between'>
				<label htmlFor={this.props.id} id={`${this.props.id}-ariaLabel`} >{this.props.labelText}</label>
				<span id={this.props.id} name={this.props.id} aria-labelledby={`${this.props.id}-ariaLabel`}>{this.state.value}</span>
			</div>
		);
	}
}

export default ResultItem;