import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../components/Footer";

function ProjectDetail(props) {
  const [item, setItem] = useState(null);
  const location = useLocation();
  const myparam = location.state.params;

  useEffect(() => {
    setItem(myparam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(item, "<<< item");
  return (
    <>
      {item && (
        <Container fluid className="projectDetailContainer">
          <div className="shadow-lg p-5 mb-5 rounded">
            <Row className="mb-5">
              <Col className="h2">{item.name}</Col>
            </Row>
            <Row>
              <Col>{item.desc}</Col>
              <Col>
                <p>
                  <strong>Detail Project :</strong>
                </p>
                <ul>
                  <li>Kamar tidur : 12</li>
                  <li>Luas tanah : 770 m2</li>
                  <li>Total luas bangunan : 1061 m&sup2;</li>
                  <li>Style design: Balinese Tropical Resort</li>
                  <li>Client: Mrs. Regina</li>
                  <li>Completion: 2021</li>
                  <li>Project Type: Private Residence</li>
                  <li>Style: Balinese Tropical Resort</li>
                  <li>Architects: IGN Andri Saputra, ST</li>
                </ul>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Image
                src={item.Pictures[0].url_picture}
                rounded
                fluid
                className="mt-5"
              />
            </Row>
            <Row>
              <Image
                src={item.Pictures[1].url_picture}
                rounded
                fluid
                className="mt-5"
              />
            </Row>
            <Row>
              <Image
                src={item.Pictures[2].url_picture}
                rounded
                fluid
                className="mt-5"
              />
            </Row>
            <Row>
              <Image
                src={item.Pictures[3].url_picture}
                rounded
                fluid
                className="mt-5"
              />
            </Row>
          </div>
          <div>
            <Row xs={1} md={3} className="g-4 mt-4">
              <Col>
                <Image
                  src={item.Pictures[3].url_picture}
                  rounded
                  fluid
                  className="mt-5"
                />
              </Col>
              <Col>
                <Image
                  src={item.Pictures[3].url_picture}
                  rounded
                  fluid
                  className="mt-5"
                />
              </Col>
              <Col>
                <Image
                  src={item.Pictures[3].url_picture}
                  rounded
                  fluid
                  className="mt-5"
                />
              </Col>
              <Col>
                <Image
                  src={item.Pictures[3].url_picture}
                  rounded
                  fluid
                  className="mt-5"
                />
              </Col>
              <Col>
                <Image
                  src={item.Pictures[3].url_picture}
                  rounded
                  fluid
                  className="mt-5"
                />
              </Col>
              <Col>
                <Image
                  src={item.Pictures[3].url_picture}
                  rounded
                  fluid
                  className="mt-5"
                />
              </Col>
            </Row>
          </div>
        </Container>
      )}
      <Footer />
    </>
  );
}

export default ProjectDetail;
