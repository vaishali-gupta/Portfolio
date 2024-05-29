import React  from 'react';
import {
  Navbar,
  NavbarBrand,
  Col,
  Row,
  NavbarText,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardGroup
} from 'reactstrap';
import logo from './img/profile.jpeg';
import carPic from './img/Car-Hub.png';
import shoePic from './img/React-App.png';

function LandingComponent() {

  return (
    <div>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
         Portfolio
       </NavbarBrand>
       <NavbarText>Simple Text</NavbarText>
      </Navbar>


      <Row>
        <Col className='leftSection text-left'>
          <h3>Hello</h3>
          <h1>I'm Vaishali Gupta </h1>
          <h1> a <b>Frontend</b> Engineer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi. Distinctio accusantium fugit odit? Fugit ipsam. Sed ac fringilla ex. Nam mauris velit, ac cursus quis, non leo.</p>
          <div>
            <Button
              color="secondary"
            >
              Hire Me
            </Button> &nbsp; &nbsp;
            <Button href="#projects"
              color="primary"
            >
              Portfolio
            </Button>
          </div>
        </Col>
        <Col className='rightSection'>
          <img className='' src={logo} alt='developer pic'/>
        </Col>
      </Row>

      <Row>
        <Col id="projects">
        <CardGroup>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src={carPic}
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    CarHub Shop
                  </CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                  </CardText>
                  <Button color="info" href="https://carhub-shop.netlify.app/" target="_blank">
                    Demo
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src={shoePic}
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Fancy Shoe Store
                  </CardTitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to additional content.
                  </CardText>
                  <Button color="info" href="https://fancy-shoe-store.netlify.app" target="_blank">
                    Demo
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardText>
                    Placeholder for a new project under construction.
                  </CardText>
                  <Button color="secondary">
                    Demo
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
        </Col>
      </Row>
    </div>
  );
}

export default LandingComponent;