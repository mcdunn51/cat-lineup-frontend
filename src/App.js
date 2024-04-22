import { Col, Container, Row } from "react-bootstrap";
//
import NavTop from "./components/navTop/NavTop";
import HomeContentLeft from "./components/homeContentLeft/HomeContentLeft";
import HomeContentRight from "./components/homeContentRight/HomeContentRight";
import PictureUpload from "./components/pictureUpload/PictureUpload";
import catLineup from "./assets/catLineup.jpeg";

function App() {
  return (
    <>
      <Container>
        <NavTop />
      </Container>
      <Container id="appContainer">
        <div id="app" className="ps-3 pe-3">
          <Row className="mb-5">
            <HomeContentLeft
              header="Cat Lineup"
              subheader="#1 online cat identification software"
            />
            <HomeContentRight src={catLineup} />
          </Row>
          <Row>
            <Col>
              <PictureUpload />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default App;
