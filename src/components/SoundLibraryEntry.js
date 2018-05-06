import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sound from 'react-sound'
import { bindActionCreators } from 'redux'
import { removeSound } from '../modules/sounds-reducer'

//SHOULD BE A UL AND LI's
//
const SoundLibraryEntryOuter = styled.div`
  width:  100%;
  height: 100px;
  border: 1px solid grey;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  box-sizing: border-box;
  padding: 10px;
`

const PlayButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  grid-column: 1;
  width: 50px;
  height: 50px;
`;

const SoundName = styled.h3`
  grid-column: 4 / 6;
  font-size: 1em;
`

const SoundDescription = styled.p`
  grid-row:2;
  grid-column: 1/4;
`

const RemoveButton = styled.button`
  background: transparent;
  color: palevioletred;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  grid-row:2;
  grid-column: 6;
`

class SoundLibraryEntry extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string
  };

  state = {
    playing : Sound.status.STOPPED
  }

  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this)
  }

  togglePlay(){
    if(this.state.playing === Sound.status.STOPPED){
      this.setState({playing : Sound.status.PLAYING})
    }
    else{
      this.setState({playing : Sound.status.STOPPED})
    }
  }

  render() {
    return (
      <SoundLibraryEntryOuter>
        <PlayButton onClick={this.togglePlay}> { this.state.playing } </PlayButton>
        <SoundName>{this.props.name}</SoundName>
        <SoundDescription>{this.props.description}</SoundDescription>
        <Sound
          url = {this.props.url}
          playStatus={this.state.playing}
          autoLoad={true}
          volumne = {100}
          onPlaying={({ position }) => console.log(position) }
          onFinishedPlaying={this.togglePlay}
        />
        <RemoveButton onClick={()=>{this.props.removeSound(this.props.id)}}>
          remove
        </RemoveButton>
      </SoundLibraryEntryOuter>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeSound
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(SoundLibraryEntry);
