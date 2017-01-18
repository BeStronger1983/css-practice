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
        <div className={styles.half_pie}>
        </div>
        <div className={styles.pie_chart}>
        </div>
        <div className={styles.no_padding_no_border_box}>
        </div>
        <div className={styles.with_padding_no_border_box}>
        </div>
        <div className={styles.no_padding_with_border_box}>
        </div>
        <div className={styles.with_padding_with_border_box}>
        </div>
        <div className={styles.transform_origin_test}>
        </div>
        <div className={styles.transform_origin_test2}>
        </div>
        <div className={styles.test_before_after}>
          test
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
