import React from 'react';
import AdjustableInputField from './AdjustableInputField';

export default class FieldsSection extends React.Component {
	constructor(props){
		super(props);
		this.mappedFields = props.fieldsArray.map( (field, key) => <AdjustableInputField
			handleFieldChange={this.props.handleFieldChange}
			key={key} 
			id={field.id} 
			labelText={field.labelText} 
			curState={this.props.curState}
		/>);
	}
	render() {
		return(
			<section id={this.props.sectionId} className='FieldsSection side-padded width-one-fifth'>
				<h5 className="left">{this.props.sectionTitle}</h5>
				<form>{this.mappedFields}</form>
			</section>
		)
	}
}