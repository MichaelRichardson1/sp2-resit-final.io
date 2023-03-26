import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function ViewBids({ bids }) {
  return (
    <Accordion>
      {bids && bids.length > 0 ? (
        bids.map((bid) => (
          <Card key={bid.id}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={bid.id} className="view">
                View Bid Details
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={bid.id}>
              <Card.Body>
                <div className="row">
                  <div className="col">{bid.bidderName}</div>
                  <div className="col">{bid.amount}</div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))
      ) : (
        <div>No bids yet.</div>
      )}
    </Accordion>
  );
}

export default ViewBids;