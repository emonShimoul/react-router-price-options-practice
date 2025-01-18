import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" /> {feature}
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
