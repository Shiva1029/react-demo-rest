import React from 'react';
import styles from './LayoutContainer.sass';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

const LayoutContainer = props => (
  <React.Fragment>
    <HeaderComponent />
    <div className={styles.mainContainer}>
      {props.children}
    </div>
  </React.Fragment>
);
// TODO: Make Login Component reusable by passing props down to it

export default LayoutContainer;
