import React from "react";
import PropTypes from "prop-types";

export default function ContactsCounter({ first, second, changeColor }) {
  return (
    <div
      className={`counter-wrapper ${
        first >= second && changeColor && "counter-wrapper--overflowed"
      }`}
    >
      <span>{first}</span>/<span>{second}</span>
    </div>
  );
}

ContactsCounter.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  changeColor: PropTypes.bool,
};
