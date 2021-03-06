import { Container, Row, Col, Card } from 'react-bootstrap'
import { useCookies } from 'react-cookie';
import JoinScreen from "./JoinScreen";
import Emoji from 'react-apple-emojis'
const ProfileScreen = () => {
  const [cookies,] = useCookies(['user']);
  return (
    <Container fluid className="p-5">
      <Row>
        <Col md={8} sm={12}>
          <h1 className="mb-3">Hello, <mark>{cookies.user.username}</mark>
          <span>
            <img
              width={50}
              height={50}
              className="ml-2 mb-2"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/waving-hand_1f44b.png"
              alt="hello" />
          </span>
          </h1>
          <h5 className="mb-3" align="justify">{cookies.user.bio}</h5>
        </Col>
        <Col md={4} sm={12}>
          <Card body className="shadow mb-3">
            <Emoji name="envelope-with-arrow" width={20} className="mr-2 mb-1" />{cookies.user.email} <br />
            <Emoji name="books" width={20} className="mr-2 mb-1" />{cookies.user.school} <br />
            <Emoji name="airplane" width={20} className="mr-2" />{cookies.user.country}
          </Card>
        </Col>
      </Row>
      <Row>
        <JoinScreen/>
      </Row>
    </Container>
  );
};

export default ProfileScreen;