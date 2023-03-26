import PropTypes from "prop-types";
import MESSAGES from "../constants/messages.js";

export default function ErrorMessage({ errorCode = "UNKNOWN" }) {
	
	const message = MESSAGES.errors[errorCode];
	return <div className="error">{message}</div>;
}

ErrorMessage.propTypes = {
	errorCode: PropTypes.string,
};