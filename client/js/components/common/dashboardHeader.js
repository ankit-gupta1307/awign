import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, Button, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import dashboardHeaderCss from 'css/dashboardHeader.scss';

@connect((store) => {
  return {}
})

export default class DashboardHeader extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
        <Grid fluid className={dashboardHeaderCss.dashboardHeader}>
          <Row>
            <Col lgOffset={2} mdOffset={2} lg={4} md={4} sm={12} xs={12}>
              <ul className={dashboardHeaderCss.headerList}>
                <li style={{"color": "#fff", "fontSize": "25px"}}>
                  DASHBOARD
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
    );
  }
}