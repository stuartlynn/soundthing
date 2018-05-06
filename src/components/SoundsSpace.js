import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SoundSpaceContainer = styled.div`
  border: 1px solid black;
  height: 100%;
  margin-right: 20px;
  flex: 1;
`

class SoundsSpace extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SoundSpaceContainer>
      </SoundSpaceContainer>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SoundsSpace);
