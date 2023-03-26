import axios from "axios";
import PropTypes from "prop-types";
import ListingCarousel from "./ListingCarousel";
import BidForm from "./EnterBid";
import ViewBids from "./ViewBids";
import { useState, useEffect } from "react";
import { LISTINGS_URL } from "../constants/api";

export default function MemberItem({ id, title, description, endsAt }) {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${LISTINGS_URL}/${id}`);
      setBids(response.data.bids);
    }
    fetchData();
  }, [id]);

  return (
    <div className="item-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <p className="card-text">Bidding Ends: {endsAt}</p>
        <ListingCarousel />
        <BidForm id={id} />
        <ViewBids bids={bids} />
      </div>
    </div>
  );
}

MemberItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  endsAt: PropTypes.string.isRequired,
};