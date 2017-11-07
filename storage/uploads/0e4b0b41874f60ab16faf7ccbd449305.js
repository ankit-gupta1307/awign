import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, ButtonToolbar, Button, Tab, Tabs, Table } from 'react-bootstrap'
import Custom from 'css/custom.scss';
import TableData from 'css/tableData.scss';
import MenuTopBar from 'components/common/mainMenuTop';
import BreadCrumb from 'components/common/breadCrumbMenu';


@connect((store) => {
  return {
    claimListData: store.claimList.claimListData,
    checkedPolicies: store.claimList.checkedPolicies
  }
})

export default class PreviewReceipt extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    let data = this.props.claimListData;
    if(data.length > 0) {
      data.map((item, index) => {
        
      })
    }
    return (
      <div>
        <Grid className={Custom.customContainer}>
          <Row className={Custom.bottomBorderOne}>
            <Col lg={10} md={12} sm={12} xs={12} lgOffset={1}>
              <h1 className={Custom.policyClaimTitle+ " "+"pull-left"}>Policy Reciept No: 3746038489</h1>
              <div className={Custom.printReceiptBtn}><i class="fa fa-print" aria-hidden="true"></i>Print Recipt</div>
            </Col>

          </Row>
          <Row>
            <Col lg={10} md={12} sm={12} xs={12} lgOffset={1} className="clearfix">
                <div className={Custom.policyDetails + " "+ Custom.previewReceipt}>
                  <Col lg={3} md={4} sm={6} xs={12} lgOffset={0}>
                    <div className={Custom.policyDetailText}>
                      <h3>Policy Application ID</h3>
                      <h4>63781263127632</h4>
                    </div>
                  </Col>
                  <Col lg={2} md={4} sm={6} xs={12}>
                    <div className={Custom.policyDetailText}>
                      <h3>Name</h3>
                      <h4>Vinay kashyap</h4>
                    </div>
                  </Col>
                  <Col lg={2} md={4} sm={6} xs={12}>
                    <div className={Custom.policyDetailText}>
                      <h3>Mobile No.</h3>
                      <h4>+91 9891887226</h4>
                    </div>
                  </Col>
                  <Col lg={3} md={4} sm={6} xs={12}>
                    <div className={Custom.policyDetailText}>
                      <h3>Created On.</h3>
                      <h4>12/12/2012 / 12:12:12</h4>
                    </div>
                  </Col>
                  <Col lg={2} md={4} sm={6} xs={12}>
                    <div className={Custom.policyDetailText}>
                      <h3>KCC/Saving no.</h3>
                      <h4>345672347364</h4>
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <hr className={Custom.customHRReceipt} />
                  </Col>
                </div>
            </Col>
          </Row>

          <Row>
            <Col lg={10} md={12} sm={12} xs={12} lgOffset={1} className="clearfix"> 
               <div className={Custom.ddTableContent+ " "+ TableData.ddTableSec}>
                  <h1 class={Custom.previewReceiptHeading}>Farmer Details</h1>
                  <Table responsive className={TableData.customTable+ " " +TableData.claimTable+" "+ Custom.receiptNoMargin}>
                      <thead>
                        <tr>
                          <th>
                          </th>
                          <th>S. No.</th>
                          <th>Farmer Name</th>
                          <th>Aadhar ID</th>
                          <th>Mobile No.</th>
                          <th>Subsidized Area (Hect.)</th>
                          <th>Non Sunsidized Area (Hect.)</th>
                        </tr>
                      </thead>
                      <tbody>      
                        <tr>
                          <td></td>
                          <td>1</td>
                          <td>Ajmer</td>
                          <td>344343434</td>
                          <td>989198899</td>
                          <td>234</td>
                          <td>2334</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
              </div>
              </Col>
          </Row>
          <Row>
            <Col lg={10} md={12} sm={12} xs={12} lgOffset={1} className="clearfix"> 
               <div className={Custom.ddTableContent+ " "+ TableData.ddTableSec}>
                  <h1 class={Custom.previewReceiptHeading}>Crop Details</h1>
                  <Table responsive className={TableData.customTable+ " " +TableData.claimTable}>
                      <thead>
                        <tr>
                          <th>
                          </th>
                          <th>S. No.</th>
                          <th>Village</th>
                          <th>Khata No </th>
                          <th>Crop</th>
                          <th>Crop Area (Hect.)</th>
                          <th>Premium(Rs)</th>
                          <th>Farmer Premium(Rs)</th>
                        </tr>
                      </thead>
                      <tbody>      
                        <tr>
                          <td></td>
                          <td>1</td>
                          <td>Ajmer</td>
                          <td>344343434</td>
                          <td>989198899</td>
                          <td>234</td>
                          <td>2334</td>
                          <td>2334</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
              </div>
              </Col>
          </Row>
          <Row>
            <Col lg={10} md={12} sm={12} xs={12} lgOffset={1} className="clearfix">
                <div className={Custom.policyDetails + " " +Custom.receiptContent}>
                  <Col lg={3} md={4} sm={6} xs={12} lgOffset={0}>
                    <div className={Custom.policyDetailText}>
                      <h3>Premium to be Collected</h3>
                      <h4>3330 Rs</h4>
                    </div>
                  </Col>
                  <Col lg={2} md={4} sm={6} xs={12}>
                    <div className={Custom.policyDetailText}>
                      <h3>Total Premium</h3>
                      <h4>Rs 3007</h4>
                    </div>
                  </Col>
                  <Col lg={2} md={4} sm={6} xs={12}>
                    <div className={Custom.policyDetailText}>
                      <h3>Farmer Share</h3>
                      <h4>Rs 3007</h4>
                    </div>
                  </Col>
                  <Col lg={3} md={4} sm={6} xs={12}>
                    <div className={Custom.policyDetailText}>
                      <h3>Sunsidise Area</h3>
                      <h4>232 Hect.</h4>
                    </div>
                  </Col>
                  <Col lg={2} md={4} sm={6} xs={12}>
                    <div className={Custom.policyDetailText}>
                      <h3>Non - Sunsidised</h3>
                      <h4>2 Hect.</h4>
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <hr className={Custom.receiptContentLine} />
                  </Col>
                </div>
            </Col>
          </Row>
          <Row>
            <Col lg={10} md={12} sm={12} xs={12} lgOffset={1} className="clearfix">
              <p className={Custom.disclaimerText}><span>Disclaimer :</span> The undersigned hereby acknowledges receipt and delivery of the goods described on the annexed list or invoice and further acknowledges that said goods have been inspected and are without defect</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

