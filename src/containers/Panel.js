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
      <div>
        <div className={styles.div_Box}>
          hi
        </div>
        <div className={styles.div_Circle}>
        </div>
        <div className={styles.div_Triangle}>
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