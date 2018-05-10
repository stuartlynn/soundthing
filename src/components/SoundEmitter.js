import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sound from 'react-sound';
import LinearProgress from 'material-ui/LinearProgress';

class SoundEmitter extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };
  state={
    time: 0,
    duration:null
  }

  constructor(props) {
    super(props);
  }
  calcVolume(listenerLocation, location){
    if(listenerLocation){
      const d = Math.sqrt(Math.pow(listenerLocation[0] - location[0]/100.0,2) +
        Math.pow(listenerLocation[1]-location[1]/100.0,2))
      return this.props.radius/d;
    }
    else{
      return 0
    }
  }

  render() {
    const width = 20;
    const outerWidth = this.props.radius;
    const volume  = this.calcVolume(this.props.listenerLocation, this.props.location )

    const Circle = (<div
      style={{
        width: width,
        height: width,
        borderRadius: width,
        backgroundColor: 'red',
        position: 'absolute',
        transformOrigin: 'center',
        transform:'translate(-50%, -50%)'
      }} />);


    const Radius = (<div
      style={{
      width:outerWidth,
      height:outerWidth,
      borderRadius: outerWidth,
      border: '1px dashed green',
      position: 'absolute',
      transformOrigin: "center",
      transform: 'translate(-50%, -50%)'
      }}/>);

    const x = this.props.location[0]*this.props.spaceWidth/100.0;
    const y = this.props.location[1]*this.props.spaceHeight/100.0;

    const Outer = (<div
      style={{
        position:'absolute',
        transformOrigin: 'center',
        transform: `translate3d(${x}px, ${y}px,0)`
      }}>
         {Circle}
         {Radius}
        <Sound
          url = {this.props.sound.url}
          playStatus={Sound.status.PLAYING}
          autoLoad={true}
          volumne = {100}
          position= {this.state.time}
          onPlaying={({ position, duration }) => this.setState({time:position, duration: duration}) }
          loop={true}
        />

          <LinearProgress
            mode='determinate'
            max={this.state.duration}
            min={0}
            value={this.state.time}
            style={{width:50, height:10, marginLeft:-25, marginTop:15}}
          />
          <p style={{fontSize:'8px',transform:'translate(-50%,0)'}}>{this.props.sound.name} |
            {volume}
          </p>
      </div>
      );

    return Outer
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(SoundEmitter);
