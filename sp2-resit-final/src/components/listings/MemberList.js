import PropTypes from "prop-types";
import MemberItem from "./MemberItem";

export default function MemberList({ items }) {
	return (
		<div className="items">
			{items.map((item) => {
				const { id, title, description, endsAt } = item;
				return <MemberItem key={id} title={title} description={description} endsAt={endsAt}/>;                        
			})}
		</div>
	);
}

MemberList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
};