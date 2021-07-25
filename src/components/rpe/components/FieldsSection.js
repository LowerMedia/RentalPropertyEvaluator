import React from 'react';
import AdjustableInputField from './AdjustableInputField';

export default class FieldsSection extends React.Component {
	constructor(props) {
		super(props)
		this.collapseToggle = this.collapseToggle.bind(this)
	}
	collapseToggle() {
		document.getElementById(`${this.props.sectionId}`).classList.toggle('collapsed');
	}
	render() {
		return(
			<section id={this.props.sectionId} className='FieldsSection side-padded width-one-fifth column is-paddingless is-3 mb-3 collapsable'>
				<h3 onClick={this.collapseToggle} className="left is-size-4 is-italic has-font-weight-bold title-border">{this.props.sectionTitle}</h3>
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