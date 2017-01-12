import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CSSModules from 'react-css-modules';

import styles from  './style';

class Panel extends React.Component {
  constructor() {
    super();
  }

  render() {

    const { number, actions } = this.props;

    return (
      <div className>
        <div className={styles.div_vampire}>
          <div className={styles.div_head}>
            <div className={styles.div_cheek_left}>
            </div>
            <div className={styles.div_cheek_right}>
            </div>
            <div className={styles.div_mouth}>
              <div className={styles.div_top_teeth_left}>
              </div>
              <div className={styles.div_top_teeth_right}>
              </div>
              <div className={styles.div_top_teeth_mid}>
              </div>
            </div>
            <div className={styles.div_nose}>
            </div>
            <div className={styles.div_eye_border_left}>
              <div className={styles.div_eyebrow_left}>
              </div>
              <div className={styles.div_eye_left}>
              </div>
            </div>
            <div className={styles.div_eye_border_right}>
              <div className={styles.div_eyebrow_right}>
              </div>
              <div className={styles.div_eye_right}>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Panel, styles));