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
import CircleManagementCSS from 'css/circleManagement.scss';
import {getTasks} from 'actions/taskListActions';
import dashboardHeaderCss from 'css/dashboardHeader.scss';
import AssignTaskModal from 'components/tasks/assignTaskModal';

@connect((store) => {
  return {
    tasksList: store.tasksReducer.tasksList,
    tasksListError: store.tasksReducer.tasksListError,
  }
  this.createTask = this.createTask.bind(this);
})

export default class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    if(!this.props.tasksList.length) {
      this.props.dispatch(getTasks(this.props.match.params.id));
    }
  }

  toggleModal() {
    if(this.state.openModal) {
      this.setState({
        openModal: false
      })
    } else {
      this.setState({
        openModal: true
      })
    }
  }

  render() {
    let tasksList = [];
    if(this.props.tasksList.length) {
      tasksList = this.props.tasksList.map((task, index) => {
        return <tr key={task.taskName + index}>
                <td>{task.taskName}</td>
                <td>{task.internAssigned}</td>
                <td>{task.numberOfInterns}</td>
                <td>{task.deliveryDate}</td>
                <td>{task.tentavieCompletionDate}</td>
                <td>{task.completed}</td>
                <th>Edit Task</th>
                <th>X</th>
               </tr>
      })
    }
    return (
      <div>
        <DashboardHeader/>
        {this.state.openModal ? <AssignTaskModal projectID={this.props.match.params.id} closeModal={this.toggleModal} dispatch={this.props.dispatch}/>: false}
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
                  <Row>
                    <Col lg={8} md={8} sm={12} xs={12} className={dashboardHeaderCss.headerList}>
                      <button onClick={this.toggleModal}>Create Task</button>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className={dashboardHeaderCss.headerList} style={{"color": "#fff", "fontSize": "16px"}}>
                      TASK LIST for Project {this.props.match.params.title}
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Table responsive className={CircleManagementCSS.commonTable}>
                    <thead>
                      <tr>
                        <th>Task Name</th>
                        <th>Intern Assigned</th>
                        <th>Interns Working</th>
                        <th>Delivery Date</th>
                        <th>Completion Date</th>
                        <th>Task Status</th>
                        <th>Edit</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasksList}
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
