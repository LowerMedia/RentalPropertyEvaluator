import React from 'react';
import AdjustableInputField from './AdjustableInputField';

export default class FieldsSection extends React.Component {
	render() {
		return(
			<section id={this.props.sectionId} className='FieldsSection side-padded width-one-fifth column is-paddingless is-2'>
				<h5 className="left">{this.props.sectionTitle}</h5>
				<form>
					{this.props.fieldsArray.map( (field, key) => <AdjustableInputField
						handleFieldChange={this.props.handleFieldChange}
						key={key}
						id={field.id} 
						labelText={field.labelText}
						curState={this.props.curState}
						numType={field.numType}
						fieldType={field.fieldType}
					/>)}
				</form>
			</section>
		)
	}
}