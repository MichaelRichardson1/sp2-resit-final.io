import PropTypes from "prop-types";
import ListingCarousel from "./ListingCarousel";

export default function VisitorItem({ title, description, endsAt }) {
	
	return (

		<div class="item-card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">{title}</h4>
                <p class="card-text">{description}</p>
                <p class="card-text">Bidding Ends: {endsAt}</p>
                <ListingCarousel />
            </div>
        </div>

	);
}

VisitorItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	endsAt: PropTypes.string.isRequired,
};