import { useHistory } from 'react-router';
import Profile from './Profile';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Security from './Security';
import Account from './Account';

export default function Settings() {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/home');
  };

  return (
    <>
      <div className="navbar">
        <Button variant="outline-secondary" onClick={handleGoBack}>
          Back
        </Button>
      </div>

      <div className="title">
        <h1>Personal info</h1>
        <small>Some info may be visible to other people</small>
      </div>

      <div className="settings">
        <Tab.Container>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mb-5">
                <Nav.Item>
                  <Nav.Link className="cursor-pointer" eventKey="profile">
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="cursor-pointer" eventKey="security">
                    Security
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="cursor-pointer" eventKey="account">
                    Account
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey="security">
                  <Security />
                </Tab.Pane>
                <Tab.Pane eventKey="account">
                  <Account />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}
