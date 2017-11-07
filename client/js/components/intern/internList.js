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
import {getInternsList} from 'actions/internActions';
import dashboardHeaderCss from 'css/dashboardHeader.scss';

@connect((store) => {
  return {
    internList: store.internReducer.internList,
    internListError: store.internReducer.internListError,
  }
})

export default class InternList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if(!this.props.internList.length) {
      this.props.dispatch(getInternsList());
    }
  }

  render() {
    let internList = [];
    if(this.props.internList.length) {
      internList = this.props.internList.map((intern, index) => {
        let tasksAssigned = intern.tasksAssigned.map((item, index) => {
          return item.taskName
        })
        tasksAssigned = tasksAssigned.join(", ")
        return <tr key={intern.internName + index}>
                <td>{intern.internName}</td>
                <td>{intern.department}</td>
                <td>{intern.role}</td>
                <td>{tasksAssigned}</td>
                <td>{intern.completed}</td>
                <td>{intern.tasksAssigned.length}</td>
                <td><button>Assign Task</button></td>
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
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className={dashboardHeaderCss.headerList} style={{"color": "#fff", "fontSize": "16px"}}>
                      INTERNS LIST
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Table responsive className={CircleManagementCSS.commonTable}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Tasks Assigned</th>
                        <th>Tasks Completed</th>
                        <th>Total Tasks</th>
                        <th>Assign Task</th>
                      </tr>
                    </thead>
                    <tbody>
                      {internList}
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
