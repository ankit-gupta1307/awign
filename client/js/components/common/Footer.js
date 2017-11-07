import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import footer from 'css/footer.scss';

export default class FooterAppBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<footer className={footer.footerMain}>
      <Grid>
        <ul>
          <li>
              <Link to="#">
                    Home
                </Link>
              </li>
              <li>
                 <Link to="#">
                    About Us
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    Help
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    FAQ
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    Feedback
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    RTI
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    Terms and Conditions
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    Copyright Policy
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    Hyperlinking Policy
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    Privacy Policy
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    Sitemap Accessibility
                    
                  </Link>
              </li>
              <li>
                 <Link to="#">
                    Statement Website Policy
                  </Link>
              </li>
                                        
        </ul>
        <p>This website belongs to Department of Agriculture, Cooperation and Farmers Welfare Ministry of Agriculture and Farmers Welfare, Government of India </p> 
      </Grid>
      </footer>);
  }
}



