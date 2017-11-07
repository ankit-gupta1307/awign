import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';

export default class AlertInstance extends Component {
	render() {
		var that = this;

		window.setTimeout(function() {
			that.props.onDismiss()
		},8000)

		console.log('rrrrrrrrrrrrr-------------')
		return ( 
		  <Alert bsStyle={this.props.type} onDismiss={this.props.onDismiss}>
		    <strong>{this.props.strongMessage}</strong> {this.props.normalMessage}
		  </Alert>
		)
	}
};