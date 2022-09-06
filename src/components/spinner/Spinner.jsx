import './spinner.css';
import PropTypes from "prop-types"

export default function Spinner(props) {
    return (
        <div className="overlay-spinner">
            <div className="spinner">{props.children}</div>
        </div>
    );
}
Spinner.propTypes = {
    children: PropTypes.node
}