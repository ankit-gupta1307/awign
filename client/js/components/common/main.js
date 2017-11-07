import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import EnsureLoggedInContainer from 'components/common/EnsureLoggedInContainer';

export default class mainPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <Switch>
           <Route component={EnsureLoggedInContainer} />
        </Switch>
      </div>
    );
  }
}
