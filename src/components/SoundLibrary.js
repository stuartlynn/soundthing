import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SoundLibraryEntry from './SoundLibraryEntry'
import AddSoundForm from './AddSoundForm'

import styled from 'styled-components';

const SoundLibraryContainer = styled.div`
 width : 100%;
 height: 100%;

`
const AddSoundButton = styled.button`
  background: transparent;
  color: palevioletred;
  position:absolute;
  bottom: 0px;
  right: 0px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
`
class SoundLibrary extends Component {
  state = {
    addingSound: false
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props){
    super(props)
    this.toggleAdd = this.toggleAdd.bind(this)
  }

  renderSound(id,sound){
    console.log('rendering sound ', id,sound)
    if(sound){
      return (
        <SoundLibraryEntry
          name = {sound.name}
          key  = {id}
          id   = {id}
          description = {sound.description}
          url = {sound.url}
        />)
    }
  }

  toggleAdd(){
    this.setState({addingSound: !this.state.addingSound})
  }

  renderSoundList(){
    return (
      <div>
        {Object.entries(this.props.sounds).map((sound) => this.renderSound(...sound) )}
        <AddSoundButton onClick={this.toggleAdd}> Add Sound </AddSoundButton>
      </div>
    )
  }

  renderAdd(){
    return ( <AddSoundForm onDismiss={()=>this.setState({addingSound:false})}/> )
  }

  render() {
    const content = this.state.addingSound ?  this.renderAdd() : this.renderSoundList() ;

    return (
      <SoundLibraryContainer>
        {content}
      </SoundLibraryContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    sounds: state.sounds
  };
}

export default connect(mapStateToProps)(SoundLibrary);
