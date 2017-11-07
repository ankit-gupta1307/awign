import React, {Component} from 'react';
import { Row,Carousel} from 'react-bootstrap';
import loginCss from 'css/loginCss.scss';

export default class CarouselNew extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return  <Row>
             <Carousel class="loginSlider">
                <Carousel.Item>
                  <img alt="dbtSlider" src="/img/dbtSlider.jpg"/>
                  <Carousel.Caption className={loginCss.sliderContent}>
                   <strong>Direct Benefit Transfer</strong> or <strong>DBT</strong> is an attempt to
							change the mechanism of transferring subsidies
							launched by the government on 1 January 2013.
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="dbtSlider" src="/img/dbtSlider.jpg"/>
                  <Carousel.Caption className={loginCss.sliderContent}>
                    <strong>Direct Benefit Transfer</strong> or <strong>DBT</strong> is an attempt to
							change the mechanism of transferring subsidies
							launched by the government on 1 January 2013.
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="dbtSlider" src="/img/dbtSlider.jpg"/>
                  <Carousel.Caption className={loginCss.sliderContent}>
                    <strong>Direct Benefit Transfer</strong> or <strong>DBT</strong> is an attempt to
							change the mechanism of transferring subsidies
							launched by the government on 1 January 2013.
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
  }
}