import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import Main from 'components/common/main';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import historyReducer from 'reducers';
// import { config } from 'config'
import reducers from './../reducers';
import Landing from 'components/landing/landing';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };
  
  render() {
    const { store, history } = this.props
    //console.log(history);
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Main} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
      )
    }
  }
