
import React, {Component} from 'react'
import {Alert} from 'react-bootstrap'

export default class Notify extends Component {

  state = {
    alertVisible: true
  };

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  render() {
    const {status, message} = this.props;
    if (this.state.alertVisible) {
    return (
      <Alert bsStyle={status} onDismiss={this.handleAlertDismiss.bind(this)}>
         {message}
      </Alert>
    )
  } else return <div></div>
  }
}
