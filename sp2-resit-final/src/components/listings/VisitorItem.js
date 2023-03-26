import PropTypes from "prop-types";
import ListingCarousel from "./ListingCarousel";

export default function VisitorItem({ title, description, endsAt }) {
	
	return (

		<div className="item-card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <p className="card-text">Bidding Ends: {endsAt}</p>
                <ListingCarousel />
            </div>
        </div>

	);
}

VisitorItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	endsAt: PropTypes.string.isRequired,
};