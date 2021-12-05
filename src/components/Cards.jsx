import React from "react";
import "./Cards.css";
import { Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";

function Cards(props) {
  const history = useHistory();
  const handleClickDetail = (item) => {
    history.push("/project-detail", { params: item });
  };

  return (
    <div>
      <h1 className={"mt-5"}>{props.data.name}</h1>
      <Row xs={1} md={2} className="g-4 mt-4">
        {props.data.Projects.map((item, idx) => (
          <Col key={idx}>
            <Card
              className="shadow-lg p-1 mb-5 bg-white rounded border-0"
              onClick={() => handleClickDetail(item)}
            >
              <Card.Img variant="top" src={item.Pictures[0].url_picture} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="small text-secondary">
                  {item.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
