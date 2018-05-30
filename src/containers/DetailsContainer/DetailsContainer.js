import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DetailsComponent from '../../components/DetailsComponent/DetailsComponent';
import { recommendationService, detailsService, searchService } from '../../services/userService';
import SearchFormComponent from '../../components/SearchFormComponent/SearchFormComponent';

class DetailsContainer extends PureComponent {
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
    this.props.history.push('/');
  };

  componentWillMount = () => {
    const { match: { params }, getRecommendations, getDetails } = this.props;
    getDetails(params.itemId);
    getRecommendations(params.itemId);
  };

  componentDidUpdate(prevProps) {
    const { match: { params }, getRecommendations, getDetails } = this.props;
    if (prevProps.match.params.itemId !== params.itemId) {
      getDetails(params.itemId);
      getRecommendations(params.itemId);
    }
  }

  render() {
    const {
      recommendations, details, loading, message,
    } = this.props;
    /* Not using {...props} bellow in return statement to avoid passing unused methods down */
    return (
      <React.Fragment>
        <SearchFormComponent value={this.state.term} disabled={this.state.button} onSubmit={this.onSubmit} onChange={this.setTerm} />
        <DetailsComponent recommendations={recommendations} details={details} loading={loading} message={message} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recommendations: state.user.recommendations,
  details: state.user.details,
  loading: state.user.loading,
  message: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  getRecommendations: id => dispatch(recommendationService(id)),
  getDetails: id => dispatch(detailsService(id)),
  onValidSubmit: term => dispatch(searchService(term)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsContainer));
