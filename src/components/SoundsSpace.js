import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SoundEmitter from './SoundEmitter'
import {updateSize, setListenerLoc, setMouse} from '../modules/sound-space-reducer.js'
import { bindActionCreators } from 'redux'
import offset from 'mouse-event-offset'

const SoundSpaceContainer = styled.div`
  border: 1px solid black;
  height: 100%;
  margin-right: 20px;
  flex: 1;
  position:relative;
  transform: translate3d(0,0,0);
`

class SoundsSpace extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
  updateDimensions(){
    this.props.updateSize(this.soundSpace.clientWidth, this.soundSpace.clientHeight)
  }
  componentDidMount() {
    this.updateDimensions()
  }
  componentWillMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  renderSoundEmitter(id,source){
    return(
        <SoundEmitter
          sound={this.props.sounds[source.soundID]}
          location={source.location}
          listenerLocation={this.props.listenerLoc}
          radius={source.radius}
          selected={false}
          spaceWidth={this.props.spaceWidth}
          spaceHeight ={ this.props.spaceHeight}
          fallOff={333}>
        </SoundEmitter>
    )
  }
  updateListenerLoc(e){
    const pos = offset(e)
    this.props.setListenerLoc(pos[0]/this.props.spaceWidth, pos[1]/this.props.spaceHeight)
  }

  render() {
    return (
      <SoundSpaceContainer
        onMouseMove={(e)=> this.updateListenerLoc(e)}
        innerRef={(input) => { this.soundSpace= input; }}
      >
        { Object.entries(this.props.sources).map((a) => this.renderSoundEmitter(a[0],a[1]))}
      </SoundSpaceContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    sources: state.sources,
    sounds: state.sounds,
    spaceWidth: state.soundSpace.width,
    spaceHeight: state.soundSpace.height,
    listenerLoc: state.soundSpace.listenerLoc
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateSize,
  setListenerLoc
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SoundsSpace);
