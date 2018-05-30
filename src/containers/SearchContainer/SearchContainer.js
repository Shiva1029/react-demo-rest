import React from 'react';
import { connect } from 'react-redux';
import styles from './SearchContainer.sass';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { searchService } from '../../services/userService';

const SearchContainer = props => (
  <div className={styles.homeContainer}><SearchComponent
    {...props}
  />
  </div>);

const mapStateToProps = state => ({
  results: state.user.items,
  loading: state.user.loading,
  message: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  onValidSubmit: term => dispatch(searchService(term)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
