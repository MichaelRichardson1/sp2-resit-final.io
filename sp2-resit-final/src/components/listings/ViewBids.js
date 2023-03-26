import React, { useState, useEffect } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import axios from "axios";
import { LISTINGS_URL } from "../constants/api";

function ViewBids() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(LISTINGS_URL);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <Accordion>
      {data.map((item) => (
        <Card key={item.id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={item.id}>
              View Bids
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={item.id}>
            <Card.Body>
              <div className="row">
                <div className="col">{item.bids.bidderName}</div>
                <div className="col">{item.bids.amount}</div>
              </div>            
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default ViewBids;