import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dsHTML } from '../../utils/utils';
import styles from './SearchComponent.sass';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
import SearchFormComponent from '../SearchFormComponent/SearchFormComponent';

class SearchComponent extends Component {
  state = {
    term: '',
    button: true,
  };

  setTerm = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value.trim() });
    this.updateButton();
  };

  updateButton = () => {
    this.setState({ button: this.state.term === '' });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onValidSubmit(this.state.term);
  };

  getResultsList = results => (results.map(result => (
    <div className={styles.result} key={result.itemId}>
      <div className={styles.thumbnailContainer}>
        <Link to={`/details/${result.itemId}`}><img src={result.thumbnailImage} alt={result.name} className={styles.image} width="100" height="100" /></Link>
      </div>
      <div className={styles.detailContainer}>
        <Link to={`/details/${result.itemId}`}><h4>{result.name}</h4></Link>
        <div dangerouslySetInnerHTML={dsHTML(result.shortDescription)} />
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.amount}>${result.salePrice}</div>
      </div>
    </div>
  )));

  render() {
    const {
      loading, message, results,
    } = this.props;
    return (
      <div className={styles.container}>
        <h2>Product Search</h2>
        <SearchFormComponent value={this.state.term} disabled={this.state.button} onSubmit={this.onSubmit} onChange={this.setTerm} />
        { loading ? <div className={styles.spinnerContainer}><SpinnerComponent /></div> : null}
        { !loading && message ? <div className={styles.errorMessage}>* {message}</div> : null }
        { !loading && !message && results && results.length > 0 ? this.getResultsList(results) : null }
      </div>
    );
  }
}

SearchComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default SearchComponent;
