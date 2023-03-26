import PropTypes from "prop-types";
import ListingCarousel from "./ListingCarousel";
import BidForm from "./EnterBid";
import ViewBids from "./ViewBids";

export default function MemberItem({ id, title, description, endsAt }) {
	
	return (

		<div class="item-card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">{title}</h4>
                <p class="card-text">{description}</p>
                <p class="card-text">Bidding Ends: {endsAt}</p>
                <ListingCarousel />
                <BidForm itemId={id} />
                <ViewBids />
            </div>
        </div>

	);
}

MemberItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	endsAt: PropTypes.string.isRequired,
};