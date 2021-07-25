import React from 'react';
import AdjustableInputField from './AdjustableInputField';

export default class FieldsSection extends React.Component {
	render() {
		return(
			<section id={this.props.sectionId} className='FieldsSection side-padded width-one-fifth column is-paddingless is-3 mb-6'>
				<h3 className="left is-size-4 is-italic has-font-weight-bold title-border">{this.props.sectionTitle}</h3>
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