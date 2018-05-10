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
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const SourceEntryContainer = styled.div`
  display: grid;
  margin-bottom:20px;
  grid-template-columns: 20px 1fr ;
  widh:90%
  grid-template-areas:
        "....... header"
        "ySlider soundSelector "
        "ySlider triggerSelector "
        "ySlider falloffSelector"
        "ySlider radiusSlider"
        "ySlider xSlider";
`

const styles={
  radioButton: {},
  radioButtonLabel:{
    fontSize:'10px'
  }
}

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
                style={{gridArea: 'soundSelector', width:'90%'}}
              >
          { Object.entries(this.props.sounds).map((a)=> <MenuItem key={parseInt(a[0])} value={parseInt(a[0])} primaryText={a[1].name} />  )}
        </SelectField>

        <Slider
          max={100}
          min={0}
          value={this.props.location[1]}
          onChange={(e,val)=> this.props.updateSource(this.props.id,{location: [this.props.location[0],parseInt(val)]})}
          name='yval'
          axis="y-reverse"
          style={{height: '90%', gridArea:'ySlider'}}
        />
        <Slider
          max ={100}
          min ={0}
          value={this.props.location[0]}
          onChange={(e,val)=> this.props.updateSource(this.props.id,{location: [parseInt(val),this.props.location[1]]})}
          name='xval'
          style={{width: "90%", gridArea:'xSlider',height:'20px'}}
        />
        <Slider
          max = {200}
          min = {0}
          value = {this.props.radius}
          style={{gridArea:'radiusSlider', width:'90%',height:'20px'}}
          onChange= { (e,val) => this.props.updateSource(this.props.id,{radius:val})}
        />

        <RadioButtonGroup
          name="triggerType"
          valueSelected={this.props.triggerType}
          style={{ display: 'flex', gridArea:"triggerSelector" }}
        >
          <RadioButton
            value="OnEnter"
            label="On enter"
            style={styles.radioButton}
            labelStyle={styles.radioButtonLabel}
          />

          <RadioButton
            value="OnLeave"
            label="On leave"
            style={styles.radioButton}
            labelStyle={styles.radioButtonLabel}
          />

          <RadioButton
            value="proximity"
            label="proximity"
            style={styles.radioButton}
            labelStyle={styles.radioButtonLabel}
          />

        </RadioButtonGroup>
        <RadioButtonGroup
          name="shipSpeed"
          valueSelected={this.props.proximityType}
          style={{ display: 'flex', gridArea :"falloffSelector" }}
        >
          <RadioButton
            value="linear"
            label="linear"
            style={styles.radioButton}
            labelStyle={styles.radioButtonLabel}
          />

          <RadioButton
            value="gaussian"
            label="Gaussian"
            style={styles.radioButton}
            labelStyle={styles.radioButtonLabel}
          />

          <RadioButton
            value="proximity"
            label="proximity"
            style={styles.radioButton}
            labelStyle={styles.radioButtonLabel}
          />

        </RadioButtonGroup>
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
