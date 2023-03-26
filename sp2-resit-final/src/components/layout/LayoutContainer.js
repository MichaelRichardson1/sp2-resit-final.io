import PropTypes from "prop-types";

export default function LayoutContainer({ children }) {
	return (
		<>
			<div className="container">{children}</div>
		</>
	);
}

LayoutContainer.propTypes = {
	children: PropTypes.node,
};
