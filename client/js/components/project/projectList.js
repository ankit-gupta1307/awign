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
import dashboardHeaderCss from 'css/dashboardHeader.scss';

@connect((store) => {
  return {
    projectList: store.projectReducer.projectList,
    projectListError: store.projectReducer.projectListError,
  }
})

export default class ProjectList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if(!this.props.projectList.length) {
      this.props.dispatch(getProjects());
    }
  }
  handleTaskList(projectID, projectTitle) {
    this.props.history.push('/taskList/' + projectID + '/' + projectTitle);
  }

  render() {
    let projectList = [];
    if(this.props.projectList.length) {
      projectList = this.props.projectList.map((project, index) => {
        return <tr key={project.title + index}>
                <td onClick={(projectID) => this.handleTaskList(project.projectID, project.title)}><a>{project.title}</a></td>
                <td>{project.manager}</td>
                <td>{project.numberOfInterns}</td>
                <td>{project.tentavieCompletionDate}</td>
                <td>{project.compPercentage}</td>
                <td>{project.deliveryDate}</td>
                <th></th>
               </tr>
      })
    }
    return (
      <div>
        <DashboardHeader/>
        <Grid fluid>
          <Row>
            <div className={commonCss.panelMain}>
              <Col lg={3} md={3} sm={12} xs={12} className={commonCss.leftPanelHead}>
                <Row>
                  <DashboardLeftSec location={this.props.location.pathname}/>
                </Row>
              </Col>
              <Col lg={9} md={9} sm={12} xs={12} className={commonCss.RightPanelHead}>
                <Col lg={12} md={12} sm={12} xs={12} className={dashboardHeaderCss.dashboardHeader}>
                  <Row className={CircleManagementCSS.commonTable}>
                    <Col lg={12} md={12} sm={12} xs={12} className={dashboardHeaderCss.headerList} style={{"color": "#fff", "fontSize": "16px"}}>
                      PROJECTS LIST
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Table responsive className={CircleManagementCSS.commonTable}>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Project Head</th>
                        <th>Number Of Inters</th>
                        <th>Completion Date</th>
                        <th>Completion Percentage</th>
                        <th>Delivery Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {projectList}
                    </tbody>
                  </Table>
                </Col> 
              </Col>
            </div>
          </Row>
        </Grid>
      </div>    
    );
  }
}
