import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.scss";

export default function ContactItem({ name, number, deleteContact }) {
  return (
    <li className={styles.list__item}>
      <p className={styles.list__text}>
        <span>{name} :</span> {number}
      </p>
      <button className={styles.list__btn} onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
