import React, {Component} from 'react';
import { Footer, Button, Row, Col, Dropdown, NavItem } from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// injectTapEventPlugin();

class Main extends Component {
    render(){
        return (
            <div>
              <div>
                <div className="parent">
                  <div className="logoContainer">
                    <div className="balloonContainer">
                      <div className="balloon">
                          <div><span className="letters">C</span>
                          </div>
                          <div><span className="letters">H</span>
                          </div>
                          <div><span className="letters">E</span>
                          </div>
                          <div><span className="letters">R</span>
                          </div>
                          <div><span className="letters">I<span className="apostrophe">'</span></span>
                          </div>
                          <div><span className="letters">S</span>
                          </div>
                      </div>
                    </div>
                    <div className="title">Creative Celebrations</div>
                </div>
                  <Row>
                    <Col s={12} m={12} l={12} className='navButtonsCenter'>
                        <Link to="/" className='waves-effect waves-light btn'>Home</Link>
                        <Link to="/about" className='waves-effect waves-light btn'>About</Link>
                      <Dropdown trigger={
                      <Button className='navButton teal lighten-1' waves='light'>Balloon Decor</Button>
                        }>
                        <NavItem>
                          <Link to="/balloondecor/custom">Custom Creations</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/balloondecor/centerpieces">Centerpieces</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/balloondecor/arches">Arches</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/balloondecor/columns">Columns</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/balloondecor/floats">Parade Floats</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/balloondecor/frames">Photo Frames</Link>
                        </NavItem>
                      </Dropdown>
                      <Dropdown trigger={
                      <Button className='navButton teal lighten-1' waves='light'>Floral Designs</Button>
                        }>
                        <NavItem>
                          <Link to="/floraldesigns/weddings">Weddings</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/floraldesigns/sympathy">Sympathy Designs</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/floraldesigns/corsagesboutonnieres">Corsages & Boutonnieres</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/floraldesigns/arrangements">Arrangements</Link>
                        </NavItem>
                      </Dropdown>
                      <Link to="/contact" className='waves-effect waves-light btn'>Contact</Link>
                    </Col>
                  </Row>
              </div>
            <div className="content">
                {this.props.children}
            </div>
              <Footer copyrights="&copy; 2015 Copyright Cheri's Creative Celebrations. All Rights Reserved."   links={
                <ul>
                  <h5 className="white-text">Follow Us On</h5>
                  <ul>
                    <li className="white-text social"><a className="social-btn" href="https://www.facebook.com/cheri.creativecelebrations/" target="_blank"><FontAwesome name="facebook-square" size="2x"/></a></li>
                    <li className="white-text social"><a className="social-btn" href="https://www.instagram.com/creativeceles/" target="_blank"><FontAwesome name="instagram" size="2x"/></a></li>
                    <li className="white-text social"><a className="social-btn" href="https://www.pinterest.com/chericreativece/" target="_blank"><FontAwesome name="pinterest-square" size="2x"/></a></li>
                    </ul>
                  </ul>
              }>
                <h5 className="white-text">Cheri's Creative Celebrations</h5>
                <p className="contact-footer">Located in Santa Rosa, CA</p>
                <p className="contact-footer">Available by appointment</p>
                <p className="contact-footer">Cheri Winter</p>
                <p className="contact-footer">Phone: (707)387-4138</p>
                <p className="contact-footer">Email: cheri.creativecelebrations@gmail.com</p>
                <p className="photographers">
                Photos provided by <a href="https://www.facebook.com/AudraVonGlahnPhotography" target="_blank">Audra Von Glahn Photography</a>, <a href="https://www.facebook.com/MindyBreslinPhotography" target="_blank">Mindy Breslin Photography</a>, <a href="http://www.foothillphotographyonline.com/" target="_blank">Foothill Photography</a>, and <a href="http://www.rachellomeli.com/" target="_blank">Rachel Lomeli Photography</a>
                </p>
                <p className="webdevs">Website Design provided by <a href="https://www.linkedin.com/in/kyabut1" target="_blank">Kristine Yabut</a> and <a href="https://www.linkedin.com/in/gabrielschrock" target="_blank">Gabriel Schrock</a>
                </p>
              </Footer>
              </div>
            </div>
        );
    }
}

export default Main;
