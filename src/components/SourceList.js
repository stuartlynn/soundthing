import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SourceList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <h2>Source List</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SourceList);
