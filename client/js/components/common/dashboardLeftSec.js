import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, Button, FormControl } from 'react-bootstrap';
import dashboardLeftCSS from 'css/dashboardLeftSec.scss';
import { history } from 'store';
 
export default class DashboardLeftSec extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <ul className={dashboardLeftCSS.dashboardLeftSec} >
            <li>
              {this.props.location.indexOf("/createProject") > -1 ? <Link to="/createProject" className={dashboardLeftCSS.panelActive}>
                <img src="/img/dashboardIcon2.png"/>
                <span>Create Project</span>
              </Link>: <Link to="/createProject">
                <img src="/img/dashboardIcon2.png"/>
                <span>Create Project</span>
              </Link>}
            </li>
            <li>
              {this.props.location.indexOf("/createIntern") > -1 ? <Link to="/createIntern" className={dashboardLeftCSS.panelActive}>
                <img src="/img/dashboardIcon3.png"/>
                <span>Create Intern</span>
              </Link>: <Link to="/createIntern">
                <img src="/img/dashboardIcon3.png"/>
                <span>Create Intern</span>
              </Link>}
            </li>
            <li>
              {this.props.location.indexOf("/projectList") > -1 ?<Link to="/projectList" className={dashboardLeftCSS.panelActive}>
                  <img src="/img/dashboardIcon4.png"/>
                  <span>List of Projects</span>
              </Link>: <Link to="/projectList">
                  <img src="/img/dashboardIcon4.png"/>
                  <span>List of Projects</span>
              </Link>}
            </li>
            <li>
              {this.props.location.indexOf("/internList") > -1 ?<Link to="/internList" className={dashboardLeftCSS.panelActive}>
                  <img src="/img/dashboardIcon5.png"/>
                  <span>List of Interns</span>
              </Link>: <Link to="/internList">
                  <img src="/img/dashboardIcon5.png"/>
                  <span>List of Interns</span>
              </Link>}
            </li>
          </ul>
        </div>
    );
  }
}