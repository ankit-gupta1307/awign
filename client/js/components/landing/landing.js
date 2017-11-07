import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, Button } from 'react-bootstrap';
import DashboardHeader from 'components/common/dashboardHeader';
import DashboardLeftSec from 'components/common/dashboardLeftSec';
import DashboardHomeCSS from 'css/dashboardHome.scss';
import commonCss from 'css/common.scss';
import { history } from 'store';
import {doLogin} from 'actions/loginActions';
import loginCss from 'css/loginCss.scss';
import {HelpBlock} from 'react-bootstrap';

@connect((store) => {
  return {
    isLoggedIn: store.loginReducer.isLoggedIn
  } 
})

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      password: '',
      userIDerror: false,
      passwordError: false,
      name: ''
    }
    this.handleLogin= this.handleLogin.bind(this)
  }
  componentWillMount() {
    if(this.props.isLoggedIn) {
      this.props.history.push('/projectList');
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoggedIn) {
      nextProps.history.push('/projectList');
    }
  }

  handleUserID(event) {
    console.log('hi', event.target.value);
    this.setState({
      userID: event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin() {
    if(this.state.userID.toLowerCase() == 'Manager'.toLowerCase() && this.state.password == 12345678) {
      this.setState({
        userIDerror: false,
        passwordError: false
      })
      this.props.dispatch(doLogin(this.state.userID, this.state.password))
    } else if(this.state.userID.toLowerCase() !== 'Manager'.toLowerCase()) {
      this.setState({
        userIDerror: true,
        password: false
      })
    } else if(this.state.password !== 12345678) {
      this.setState({
        passwordError: true,
        userIDerror: false
      })
    } else {
      this.setState({
        userIDerror: true,
        passwordError: true
      })
    }
  }
  _handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <DashboardHeader/>
        <Grid fluid>
          <Row>
             <Col lg={12} md={12} sm={12} xs={12} className={commonCss.RightPanelHead}>
              <h4>Login</h4>
              <Col lg={6} md={6} sm={12} xs={12}>
                <FormGroup className={commonCss.commonForm}>
                  <label>User ID<span>*</span></label>
                  <input type="text" class="form-control" value={this.state.userID} placeholder="Enter User ID" onChange={(event) => this.handleUserID(event)}/>
                  {this.state.userIDerror ?<HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Please enter correct user ID.</HelpBlock>: false}
                </FormGroup>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <FormGroup className={commonCss.commonForm}>
                  <label>Password<span>*</span></label>
                  <input type="password" class="form-control" value={this.state.password} name="password" placeholder="Enter Paswword" onChange={(event) => this.handlePassword(event)}/>
                  {this.state.passwordError ?<HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Please enter correct password</HelpBlock>: false}
                </FormGroup>
              </Col>

              <Col lg={12} md={12} sm={12} xs={12}>
                <FormGroup className={commonCss.commonForm +" " +loginCss.signUpTerms+ " text-right"}>
                  <Button type="submit" className={commonCss.defaultBtn} onClick={this.handleLogin}>
                    Login
                  </Button>
                </FormGroup>
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}