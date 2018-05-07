import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateSource, removeSource, addSource } from '../modules/sources-reducer'
import InputRange from 'react-input-range';
import { bindActionCreators } from 'redux'
import Slider from 'material-ui/Slider';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SourceEntryContainer = styled.div`

`

class SourceEntry extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log( 'Source ', this.props)
    return (
      <SourceEntryContainer>
        <SelectField
                floatingLabelText="sound"
                value={ parseInt(this.props.soundID) }
                maxHeight={200}
                onChange={(e,k)=> this.props.updateSource(this.props.id, { soundID: Object.keys(this.props.sounds)[k] })}
                name={this.props.name}
              >
          { Object.entries(this.props.sounds).map((a)=> <MenuItem key={parseInt(a[0])} value={parseInt(a[0])} primaryText={a[1].name} />  )}
        </SelectField>

        <input placeholder='x' value={this.props.location[0]} onChange={()=>{}}/>
        <input placeholder='y' value={this.props.location[1]} onChange={()=>{}}/>
        <Slider
          max = {200}
          min = {0}
          value = {this.props.radius}
          onChange= { (e,val) => this.props.updateSource(this.props.id,{radius:val})}
        />
      </SourceEntryContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    sounds: state.sounds
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateSource,
  addSource,
  removeSource
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SourceEntry);
