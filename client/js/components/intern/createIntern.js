import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup,FormControl, Button, Table, Pagination, DropdownButton, MenuItem, HelpBlock } from 'react-bootstrap';
import DashboardHeader from 'components/common/dashboardHeader';
import DashboardLeftSec from 'components/common/dashboardLeftSec';
import commonCss from 'css/common.scss';
import searchPanel from 'css/searchPanel.scss';
import CircleManagementCSS from 'css/circleManagement.scss';
import Select from 'react-select';
import {getDepartments, getRoles, createIntern, closeAlert} from 'actions/internActions';
import loginCss from 'css/loginCss.scss';
import {getAllTasksList} from 'actions/taskListActions';
import dashboardHeaderCss from 'css/dashboardHeader.scss';
import AlertInstance from 'components/common/alertInstance';

@connect((store) => {
  return {
    allTaskList: store.tasksReducer.allTaskList,
    allTaskListError: store.tasksReducer.allTaskListError,
    departmentsList: store.internReducer.departmentsList,
    departmentsListError: store.internReducer.departmentsListError,
    rolesList: store.internReducer.rolesList,
    rolesListError: store.internReducer.rolesListError,
    createInternSuccess: store.internReducer.createInternSuccess,
    createInternError: store.internReducer.createInternError,
  }
})

export default class CreateIntern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      internName: '',
      internDepartment: '',
      internRole: '',
      assignedtaskID: '',
      assignedtaskName: '',
      tasksAssigned: [],
      tentativeCompletionDate: ''  
    }
    this.submit = this.submit.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  componentWillMount() {
    if(!this.props.allTaskList.length) {
      this.props.dispatch(getAllTasksList());
    }
    if(!this.props.departmentsList.length) {
      this.props.dispatch(getDepartments());
    }
    if(!this.props.rolesList.length) {
      this.props.dispatch(getRoles());
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.createInternSuccess) {
      this.setState({
        internName: '',
        internDepartment: '',
        internRole: '',
        assignedtaskID: '',
        assignedtaskName: '',
        tasksAssigned: [],
        tentativeCompletionDate: '' 
      })
    }
  }

  handleTentativeCompletionDate(event) {
    this.setState({
      tentativeCompletionDate: event.target.value
    })
  }
  
  handleInternName(event) {
    this.setState({
      internName: event.target.value
    })
  }
  handleInternDepartment(event) {
    this.setState({
      internDepartment: event.value
    })
  }
  handleInternRole(event) {
    this.setState({
      internRole: event.value
    })
  }
  handleTasksAssigned(event) {
    this.setState({
      tasksAssigned: event,
      assignedtaskID: event.value,
      assignedtaskName: event.label
    })
  }
  submit() {
    let assignedtaskID = this.state.assignedtaskID;
    let taskID = assignedtaskID.split('//')[0];
    let projectID = assignedtaskID.split('//')[1];
    if(this.state.tentativeCompletionDate && this.state.internName && this.state.internDepartment && this.state.internRole && assignedtaskID) {
      this.props.dispatch(createIntern(this.state.internName, this.state.internDepartment, this.state.internRole, taskID, projectID, this.state.tentativeCompletionDate))
    }
  }

  closeAlert() {
    this.props.dispatch(closeAlert());
  }

  render() {
    let departmentsList = [];
    let rolesList = [];
    let allTaskList = [];
    if(this.props.departmentsList.length) {
      departmentsList = this.props.departmentsList.map((item, index) => {
        return {
          value: item.name,
          label: item.name
        }
      })
    }
    if(this.props.rolesList.length) {
      rolesList = this.props.rolesList.map((item, index) => {
        return {
          value: item.role,
          label: item.role
        }
      })
    }
    if(this.props.allTaskList.length) {
      allTaskList = this.props.allTaskList.map((item, index) => {
        return {
          value: item.taskID + '//'+ item.projectID,
          label: item.taskName
        }
      })
    }
    return (
      <div>
        <DashboardHeader/>
        <Grid fluid>
          <Row>
            {this.props.createInternSuccess ? <AlertInstance type="success" onDismiss={this.closeAlert} strongMessage=''  normalMessage="Intern Created Successfully"/>: false}
           {this.props.createInternError? <AlertInstance type="danger" onDismiss={this.closeAlert} strongMessage=''  normalMessage="Something went wrong, please re submit"/>: false}
            <div className={commonCss.panelMain}>
              <Col lg={3} md={3} sm={12} xs={12} className={commonCss.leftPanelHead}>
                <Row>
                  <DashboardLeftSec location={this.props.location.pathname}/>
                </Row>
              </Col>
              
              <Col lg={9} md={9} sm={12} xs={12} className={commonCss.RightPanelHead}>
                <Col lg={12} md={12} sm={12} xs={12} className={dashboardHeaderCss.dashboardHeader}>
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className={dashboardHeaderCss.headerList} style={{"color": "#fff", "fontSize": "16px"}}>
                      CREATE INTERN
                    </Col>
                  </Row>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup className={commonCss.commonForm}>
                    <label>Intern name<span>*</span></label>
                    <input type="text" class="form-control" value={this.state.internName} placeholder="Enter Project title" onChange={(event) => this.handleInternName(event)}/>
                    {!this.state.internName ? <HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Enter Intern Name</HelpBlock>: false}
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <FormGroup className={commonCss.commonForm} >
                      <label>Select Department<span>*</span></label>
                      <Select name="form-field-name" options={departmentsList} value={this.state.internDepartment} onChange={(event) => this.handleInternDepartment(event)} />
                      {!this.state.internDepartment ? <HelpBlock className="mobileNumberVal" style={{'color':'red','fontSize':'10px'}}>*Please Select Department</HelpBlock>: false}
                    </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <FormGroup className={commonCss.commonForm} >
                      <label>Select Role<span>*</span></label>
                      <Select name="form-field-name" options={rolesList} value={this.state.internRole} onChange={(event) => this.handleInternRole(event)} />
                      {!this.state.internRole ?<HelpBlock className="mobileNumberVal" style={{'color':'red','fontSize':'10px'}}>*Please Select Department</HelpBlock>: false}
                    </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <FormGroup className={commonCss.commonForm} >
                      <label>Assign Task to Intern<span>*</span></label>
                      <Select name="form-field-name" options={allTaskList} value={this.state.assignedtaskID} onChange={(event) => this.handleTasksAssigned(event)} />
                      {!this.state.assignedtaskID ?<HelpBlock className="mobileNumberVal" style={{'color':'red','fontSize':'10px'}}>*Please Assign Task to Intern</HelpBlock>: false}
                    </FormGroup>
                </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <FormGroup className={commonCss.commonForm}>
                      <label>Tentative completion Date<span>*</span></label>
                      <input type="date" class="form-control" value={this.state.tentativeCompletionDate} placeholder="Select Tentative completion Date" onChange={(event) => this.handleTentativeCompletionDate(event)}/>
                      {!this.state.tentativeCompletionDate ? <HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Select Tentative completion Date</HelpBlock>: false}
                    </FormGroup>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                  <FormGroup className={commonCss.commonForm +" " +loginCss.signUpTerms+ " text-right"}>
                    <Button type="submit" className={commonCss.defaultBtn} onClick={this.submit}>
                      Create
                    </Button>
                  </FormGroup>
                </Col>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>    
    );
  }
}
