import React from 'react'

export default class LocalStorage extends React.Component {
	render() {
		return(
			<button className="button is-primary" onClick={this.props.resetLocalStorage}>Reset Local Storage</button>
		)
	}
}