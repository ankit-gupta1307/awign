import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup,FormControl, Button, Table, Pagination, DropdownButton, MenuItem } from 'react-bootstrap';
import DashboardHeader from 'components/common/dashboardHeader';
import DashboardLeftSec from 'components/common/dashboardLeftSec';
import commonCss from 'css/common.scss';
import searchPanel from 'css/searchPanel.scss';
import CircleManagementCSS from 'css/circleManagement.scss';
import {getProjects} from 'actions/projecListActions';
import ProjectList from 'components/project/projectList';
import TaskList from 'components/tasks/taskList';

@connect((store) => {
  return {
    projectList: store.projectReducer.projectList,
    projectListError: store.projectReducer.projectListError,
  }
})

export default class DashboardHome extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // this.props.dispatch(getProjects());
  }

  render() {

    return (
      <div>
        <DashboardHeader/>
        <Grid fluid>
          <Row>
            <div className={commonCss.panelMain}>
             <Col lg={3} md={3} sm={12} xs={12} className={commonCss.leftPanelHead}>
                <Row>
                  <DashboardLeftSec/>
                </Row>
             </Col>
             <Col lg={9} md={9} sm={12} xs={12} className={commonCss.RightPanelHead}>
                <Col lg={12} md={12} sm={12} xs={12} className={CircleManagementCSS.searchHead}>
                  <Row>
                    <Col lg={3} md={3} sm={12} xs={12}>
                      <Link to="" className={commonCss.defaultBtn}>Register New AAO Circle</Link>
                    </Col>
                  </Row>
                </Col>
                {this.props.location.pathname == '/projectList' ?<ProjectList history={this.props.history}/>: false}
                {this.props.location.pathname.indexOf('/taskList') > -1 ?<TaskList history={this.props.history}/>: false}
             </Col>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
