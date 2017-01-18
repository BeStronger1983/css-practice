import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CSSModules from 'react-css-modules';

import styles from  './style';

class PieChart extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.divRoot}>
        <div className={styles.PieChart}>
        </div>
        <div className={styles.no_padding_no_border_box}>
        </div>
        <div className={styles.with_padding_no_border_box}>
        </div>
        <div className={styles.no_padding_with_border_box}>
        </div>
        <div className={styles.with_padding_with_border_box}>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(PieChart, styles));