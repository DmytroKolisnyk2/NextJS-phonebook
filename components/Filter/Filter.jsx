import { useEffect } from "react";

import styles from "./Filter.module.scss";

import { v4 } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/filter/filter-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

function Filter({ onChange, value }) {
  let filterId;
  useEffect(() => {
    filterId = v4();
  });
  return (
    <div className="filter">
      <h3 className="phonebook__headline">Find contact by name</h3>
      <label className="filter__title" htmlFor={filterId}>
        <input
          value={value}
          onChange={onChange}
          className={styles.filter__input}
          type="text"
          name="filter"
          id={filterId}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: ({ target }) => dispatch(changeFilter(target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
