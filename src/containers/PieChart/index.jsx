import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CSSModules from 'react-css-modules';
import PieChart from 'react-simple-pie-chart';

import styles from  './style';

class myPieChart extends React.Component {
  constructor() {
    super();
  }

  render() {
    let percent = 60;

    let size = {
      width: 200,
      height: 200,
    };

    const slices = [
      {
        color: 'transparent',
        value: 100-percent,
      },
      {
        color: '#f00',
        value: percent,
      },
    ];

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
          test_before_after
        </div>
        <div style={size} className={styles.pie_chart_2}>
          <PieChart
            slices={slices}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(myPieChart, styles));
