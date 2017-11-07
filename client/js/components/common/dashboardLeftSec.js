import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, Button, FormControl } from 'react-bootstrap';
import dashboardLeftCSS from 'css/dashboardLeftSec.scss';
import { history } from 'store';
 
@connect((store) => {
  return {
    
  }
})

export default class DashboardLeftSec extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
        <div>
          <ul className={dashboardLeftCSS.dashboardLeftSec}>
            <li>
              <Link to="/dashboard" className={dashboardLeftCSS.panelActive}>
                  <img src="/img/dashboardIcon1.png"/>
                  <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/createProject">
                <img src="/img/dashboardIcon2.png"/>
                <span>Create Project</span>
              </Link>
            </li>
            <li>
              <Link to="/createIntern">
                <img src="/img/dashboardIcon3.png"/>
                <span>Create Intern</span>
              </Link>
            </li>
            <li>
              <Link to="/projectList">
                  <img src="/img/dashboardIcon4.png"/>
                  <span>List of Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/internList">
                  <img src="/img/dashboardIcon5.png"/>
                  <span>List of Interns</span>
              </Link>
            </li>
          </ul>
        </div>
    );
  }
}