import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import SourceEntry from './SourceEntry'

const SourceListContainer = styled.div`

`

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
      <SourceListContainer>
        { Object.entries(this.props.sources).map((s)=>
          <SourceEntry
            id = {s[0]}
            soundID = {s[1].soundID}
            url = {s[1].url}
            radius = {s[1].radius}
            color  = {s[1].color}
            location  = {s[1].location}
            key = {s[0]}
          />
          )}
      </SourceListContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    sources: state.sources
  };
}

export default connect(mapStateToProps)(SourceList);
