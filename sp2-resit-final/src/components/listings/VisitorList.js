import PropTypes from "prop-types";
import VisitorItem from "./VisitorItem";

export default function VisitorList({ items }) {
	return (
		<div className="items">
			{items.map((item) => {
				const { id, title, description, endsAt } = item;
				return <VisitorItem key={id} title={title} description={description} endsAt={endsAt}/>;                        
			})}
		</div>
	);
}

VisitorList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
};