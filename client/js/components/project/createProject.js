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
import {createProject, closeAlert} from 'actions/projecListActions';
import loginCss from 'css/loginCss.scss';
import dashboardHeaderCss from 'css/dashboardHeader.scss';
import AlertInstance from 'components/common/alertInstance';

@connect((store) => {
  return {
    createProjectSuccess: store.projectReducer.createProjectSuccess,
    createProjectError: store.projectReducer.createProjectError
  }
})

export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: '',
      managerName: '',
      managerID: '',
      deliveryDate: '',
      tentativeCompletionDate: '',
      numberOfInternsRequired: '',
      managerNameList: [{
        value: 1,
        label: 'XYZ'
      }]   
    }
    this.submit = this.submit.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.createProjectSuccess) {
      this.setState({
        projectTitle: '',
        managerName: '',
        managerID: '',
        deliveryDate: '',
        tentativeCompletionDate: '',
        numberOfInternsRequired: '',
      })
    }
  }
  handleTitle(event) {
    this.setState({
      projectTitle: event.target.value
    })
  }
  

  handleManager(event) {
    this.setState({
      managerName: event.label,
      managerID: event.value
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
  handleInternsRequired(event) {
    this.setState({
      numberOfInternsRequired: event.target.value
    })
  }
  submit() {
    if(this.state.projectTitle && this.state.managerID && this.state.deliveryDate && this.state.tentativeCompletionDate && this.state.numberOfInternsRequired) {
      this.props.dispatch(createProject(this.state.projectTitle, this.state.managerID, this.state.deliveryDate, this.state.tentativeCompletionDate, this.state.numberOfInternsRequired))
    }
  }
  closeAlert() {
    this.props.dispatch(closeAlert());
  }

  render() {
    return (
      <div>
        <DashboardHeader/>
        {this.props.createProjectSuccess ? <AlertInstance type="success" onDismiss={this.closeAlert} strongMessage=''  normalMessage="Project Created Successfully"/>: false}
        {this.props.createProjectError? <AlertInstance type="danger" onDismiss={this.closeAlert} strongMessage=''  normalMessage="Something went wrong, please re submit"/>: false}

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
                    <Col lg={12} md={12} sm={12} xs={12} className={dashboardHeaderCss.headerList} style={{"color": "#fff", "fontSize": "16px"}}>
                      CREATE PROJECT
                    </Col>
                  </Row>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup className={commonCss.commonForm}>
                    <label>Project Title<span>*</span></label>
                    <input type="text" class="form-control" value={this.state.projectTitle} placeholder="Enter Project title" onChange={(event) => this.handleTitle(event)}/>
                    {!this.state.projectTitle ? <HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Enter Project title</HelpBlock>: false}
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup className={commonCss.commonForm} >
                    <label>Select Manager<span>*</span></label>
                    <Select name="form-field-name" options={this.state.managerNameList} value={this.state.managerID} onChange={(event) => this.handleManager(event)} />
                    {!this.state.managerID ? <HelpBlock className="mobileNumberVal" style={{'color':'red','fontSize':'10px'}}>*Please select Manager Name</HelpBlock>: false}
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup className={commonCss.commonForm}>
                    <label>Delivery Date<span>*</span></label>
                    <input type="date" class="form-control" value={this.state.deliveryDate} placeholder="Select Delivery Date" onChange={(event) => this.handleDeliveryDate(event)}/>
                    {!this.state.deliveryDate ? <HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Select Delivery Date</HelpBlock>: false}
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup className={commonCss.commonForm}>
                    <label>Tentative completion Date<span>*</span></label>
                    <input type="date" class="form-control" value={this.state.tentativeCompletionDate} placeholder="Select Delivery Date" onChange={(event) => this.handleTentativeCompletionDate(event)}/>
                    {!this.state.tentativeCompletionDate ? <HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Select Tentative completion Date</HelpBlock>: false}
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup className={commonCss.commonForm}>
                    <label>Interns Required<span>*</span></label>
                    <input type="number" class="form-control" value={this.state.numberOfInternsRequired} placeholder="Enter Number of Interns" onChange={(event) => this.handleInternsRequired(event)}/>
                    {!this.state.numberOfInternsRequired ?<HelpBlock className="nameVal" style={{'color':'red','fontSize':'10px'}}>*Enter Number of Interns</HelpBlock>: false}
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
