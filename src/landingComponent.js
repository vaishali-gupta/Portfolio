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
import logo from './img/IMG_1300.jpg';
import carPic from './img/Car-Hub.png';
import shoePic from './img/React-App.png';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import resume from './img/cv.png';

function LandingComponent() {

  return (
    <div>
      <Navbar className="" color="dark" dark>
        <NavbarBrand href="/">
         Portfolio
       </NavbarBrand>
       <NavbarText><a href='mailto:vaishaligupta0205@gmail.com' target='_blank' rel='noreferrer'>Contact Me</a></NavbarText>
      </Navbar>

    
      <Row>
        <Col className='leftSection text-left'>
          <h3>Hello</h3>
          <h1>I'm Vaishali Gupta </h1>
          <h1> a <b>Frontend</b> Engineer</h1>
          <p>I'm a passionate front-end engineer with a strong foundation in HTML, CSS, and JavaScript. I bring creative ideas to life by building user-friendly and visually appealing web experiences.</p>
          <div>
            <Button href="#social"
              color="secondary"
            >
              Hire Me
            </Button> &nbsp; &nbsp;
            <Button href="#projects"
              color="primary"
            >
              Projects
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
                    Using this website user can sell and buy car. They can check the car related details.
                  </CardText>
                  <Button color="info" href="https://carhub-shop.netlify.app/" target="_blank" rel='noreferrer'>
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
                    This website is in retail Domain of fancy shoe. User can buy the shoe online. 
                  </CardText>
                  <Button color="info" href="https://fancy-shoe-store.netlify.app" target="_blank" rel='noreferrer'>
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
                    Upcoming...
                  </CardTitle>
                  <CardText>
                    New project under construction.
                  </CardText>
                  <Button color="secondary">
                    Demo
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
        </Col>
      </Row>
      <Row>
        <Col id="social">
          <a href='https://www.linkedin.com/in/vaishali-gupta/' target='_blank' rel='noreferrer' title='LinkedIn Profile'><img src={linkedin}  alt='LinkedIn'></img></a>
          <a href='https://github.com/vaishali-gupta/' target='_blank' rel='noreferrer' title='Github Profile'> <img src={github}  alt='Github'></img></a>
          <a href='https://drive.google.com/file/d/1SpucigWu0linYJ7P8uotw6tU2facbWf7/view?usp=sharing' target='_blank' rel='noreferrer' title='Download Resume'><img src={resume}  alt='Resume'></img></a>
        </Col>
      </Row>
    </div>
  );
}

export default LandingComponent;
