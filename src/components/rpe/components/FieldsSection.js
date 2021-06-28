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
			defaultValue={field.defaultValue} 
		/>);
	}
	render() {
		return(
			<section id={this.props.sectionId} className='FieldsSection side-padded'>
				<form>{this.mappedFields}</form>
			</section>
		)
	}
}