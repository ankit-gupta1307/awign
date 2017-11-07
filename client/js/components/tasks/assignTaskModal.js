import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col,HelpBlock, FormGroup,FormControl, Button, Table, Pagination, DropdownButton, MenuItem, Modal, Form } from 'react-bootstrap';
import DashboardHeader from 'components/common/dashboardHeader';
import DashboardLeftSec from 'components/common/dashboardLeftSec';
import commonCss from 'css/common.scss';
import CircleManagementCSS from 'css/circleManagement.scss';
import SeedSupplierRegistrationCSS from 'css/seedSupplierRegistrationModal.scss';
import Select from 'react-select';
import {getInternsList, getDepartments} from 'actions/internActions';
import {createTask, closeAlert} from 'actions/taskListActions';
import AlertInstance from 'components/common/alertInstance';

@connect((store) => {
  return {
    internList: store.internReducer.internList,
    internListError: store.internReducer.internListError,
    departmentsList: store.internReducer.departmentsList,
    departmentsListError: store.internReducer.departmentsListError,
    createTaskSuccess: store.tasksReducer.createTaskSuccess,
    createTaskError: store.tasksReducer.createTaskError,
  }
})
export default class AssignTaskModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName : '',
      department: '',
      interAssigned: [],
      internID: '',
      deliveryDate:'',
      tentativeCompletionDate: ''
    }
    this.submit = this.submit.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  componentWillMount() {
    if(!this.props.internList.length) {
      this.props.dispatch(getInternsList());
    }
    if(!this.props.departmentsList.length) {
      this.props.dispatch(getDepartments());
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.createTaskSuccess) {
      this.setState({
        taskName : '',
        department: '',
        interAssigned: [],
        internID: '',
        deliveryDate:'',
        tentativeCompletionDate: ''
      })
    }
  }
  handleTaskName(event) {
    this.setState({
      taskName: event.target.value
    })
  }
  handleIntern(event) {
    this.setState({
      interAssigned: event,
      internID: event.value
    })
  }
  handleDepartment(event) {
    this.setState({
      department: event.value
    })
  }
  handleDeliveryDate(event) {
    this.setState({
      deliveryDate: event.target.value
    })
  }
  handleTentativeCompletionDate(event) {
    this.setState({
      tentativeCompletionDate: event.target.value
    })
  }
  submit() {
    if(this.props.projectID && this.state.taskName && this.state.internID && this.state.department && this.state.deliveryDate && this.state.tentativeCompletionDate) {
      this.props.dispatch(createTask(this.props.projectID,this.state.taskName,this.state.internID, this.state.department, this.state.deliveryDate, this.state.tentativeCompletionDate));
    }
  }
  closeAlert() {
    this.props.dispatch(closeAlert());
  }

  render() {
    let departmentsList = [];
    let internList = [];
    if(this.props.internList.length) {
      internList = this.props.internList.map((intern, index) => {
        return {
          value: intern.internID,
          label: intern.internName
        }
      })
    }
    if(this.props.departmentsList.length) {
      departmentsList = this.props.departmentsList.map((item, index) => {
        return {
          value: item.name,
          label: item.name
        }
      })
    }
    return (
      <div>
        <Modal show={true} dialogClassName="custom-policy-modal" onHide={this.props.closeModal} className="supplierHead" >
          <Modal.Header closeButton onClick={this.closeModal} className={SeedSupplierRegistrationCSS.successModalHead} style={{
                "background": "#fff"
               }}>
          <Modal.Title id="contained-modal-title-lg">Assign Task</Modal.Title>
          </Modal.Header>
          <Modal.Body className={SeedSupplierRegistrationCSS.registrationModalBody} style={{
                "background": "#fff"
               }}>
            {this.props.createTaskSuccess ? <AlertInstance type="success" onDismiss={this.closeAlert} strongMessage=''  normalMessage="Task Created Successfully"/>: false}
           {this.props.createTaskError? <AlertInstance type="danger" onDismiss={this.closeAlert} strongMessage=''  normalMessage="Something went wrong, please re submit"/>: false}
            <Col lg={12} md={12} sm={12} xs={12} className={SeedSupplierRegistrationCSS.modalFormBlocks}>
              <h4>General Information</h4>
               <Col lg={12} md={12} sm={12} xs={12}>
                  <Row>
                    <Form>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup className={commonCss.commonForm}>
                          <label>Task Name<span>*</span></label>
                          <input type="text" class="form-control" value={this.state.taskName} placeholder="Enter Task Name" onChange={(event) => this.handleTaskName(event)}/>
                          {!this.state.taskName ? <HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Enter Task Name</HelpBlock>: false}
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup className={commonCss.commonForm} >
                          <label>Select Department<span>*</span></label>
                          <Select name="form-field-name" options={departmentsList} value={this.state.department} onChange={(event) => this.handleDepartment(event)} />
                          {!this.state.department ? <HelpBlock className="mobileNumberVal" style={{'color':'red','fontSize':'10px'}}>*Please Select Department</HelpBlock>: false}
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup className={commonCss.commonForm} >
                          <label>Select Interns<span>*</span></label>
                          <Select name="form-field-name" options={internList} value={this.state.internID} onChange={(event) => this.handleIntern(event)} />
                          {!this.state.internID ? <HelpBlock className="mobileNumberVal" style={{'color':'red','fontSize':'10px'}}>*Please Select Department</HelpBlock>: false}
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup className={commonCss.commonForm}>
                          <label>Delivery Date<span>*</span></label>
                          <input type="date" class="form-control" value={this.state.deliveryDate} placeholder="Select Delivery Date" onChange={(event) => this.handleDeliveryDate(event)}/>
                          {!this.state.deliveryDate ?<HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Select Delivery Date</HelpBlock>: false}
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <FormGroup className={commonCss.commonForm}>
                          <label>Tentative completion Date<span>*</span></label>
                          <input type="date" class="form-control" value={this.state.tentativeCompletionDate} placeholder="Select Delivery Date" onChange={(event) => this.handleTentativeCompletionDate(event)}/>
                          {!this.state.tentativeCompletionDate ? <HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Select Tentative completion Date</HelpBlock>: false}
                        </FormGroup>
                      </Col>
                    </Form>
                  </Row>
                </Col>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className="text-right">
              <Button className={SeedSupplierRegistrationCSS.anotherUser} onClick={this.props.closeModal}>Discard</Button>
              <Button bsStyle="primary" className={commonCss.defaultBtn} onClick={this.submit}>Create</Button>
            </Col>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}