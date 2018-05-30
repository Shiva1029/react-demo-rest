import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchFormComponent.sass';

const SearchFormComponent = ({
  onSubmit, onChange, value, disabled,
}) => (
  <form onSubmit={onSubmit}>
    <div className={styles.group}>
      <input type="text" onChange={onChange} onKeyUp={onChange} className={styles.input} value={value} />
      <button
        className={disabled ? `${styles.button} ${styles.disabled}` : styles.button}
        onClick={onSubmit}
        disabled={disabled}
      >Search
      </button>
    </div>
  </form>
);

SearchFormComponent.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchFormComponent;
