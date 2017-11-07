
import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import Root from 'components/Root'
import { AppContainer } from 'react-hot-loader';
import { store, history } from 'store';
import PropTypes from 'prop-types';


render(
  <AppContainer>
    <Root {...{store}} history={history}/>
  </AppContainer>,
  document.getElementById('app')
);
