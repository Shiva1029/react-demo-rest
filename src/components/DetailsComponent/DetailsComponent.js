import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { dsHTML } from '../../utils/utils';
import styles from './DetailsComponent.sass';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';

const buildRecommendations = recommendations => (recommendations.map(item => (
  <div className={styles.recommendations} key={item.itemId}>
    <Link to={`/details/${item.itemId}`}>
      <img src={item.thumbnailImage} alt={item.name} className={styles.recommendationImage} />
      <div className={styles.recommendationLinkText}>{item.name}</div>
      <div className={styles.recommendationLinkText}>${item.salePrice}</div>
    </Link>
  </div>
)));

const buildDetails = details => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img className={styles.productImage} src={details.largeImage} alt={details.name} />
    </div>
    <div className={styles.productContainer}>
      <h2>{details.name}</h2>
      <div className={styles.amount}>${details.salePrice}</div>
      {details.freeShippingOver35Dollars ? <div>Free 2-day shipping on orders over $35</div> : null}
      <div>Model Number: {details.modelNumber}</div>
      <div dangerouslySetInnerHTML={dsHTML(details.longDescription)} />
    </div>
  </div>);

const DetailsComponent = ({
  loading, message, details, recommendations,
}) => (
  <React.Fragment>
    {!loading && details && details.itemId ? buildDetails(details) : null}
    {loading ? <div className={styles.spinnerContainer}><SpinnerComponent /></div> : null}
    {!loading && message ? <div className={styles.errorMessage}>* {message}</div> : null}
    {!loading && recommendations && recommendations.length > 0 ?
      <div className={styles.recommendationsMain}><div className={styles.recommendationsTitle}>Recommendations</div>
        <div className={styles.recommendationsContainer}>{buildRecommendations(recommendations)}</div>
      </div> : null}
  </React.Fragment>);

DetailsComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  recommendations: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default DetailsComponent;
