import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { BIDS_URL, LOGIN_URL } from "../constants/api";

function BidForm({ id }) {
  const [amount, setBidAmount] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {    
    axios.get(LOGIN_URL)
      .then(response => {
        setAccessToken(response.data.accessToken);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(BIDS_URL, {
        id,
        amount
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="amount">
        <Form.Label>Bid Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter bid amount"
          value={amount}
          onChange={(event) => setBidAmount(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="proceed">
        Place Bid
      </Button>
    </Form>
  );
}

export default BidForm;