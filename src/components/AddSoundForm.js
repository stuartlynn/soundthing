import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import styled from 'styled-components';
import { addSound } from '../modules/sounds-reducer';

const AddSoundContainer = styled.div`
`


class AddSoundForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onDismiss: PropTypes.func
  };

  state = {
    url : '',
    name: '',
    description: ''
  }

  constructor(props){
    super(props)
    this.addSound = this.addSound.bind(this)
  }

  addSound(){
    console.log('adding sound', this.state)
    this.props.addSound(this.state)
    this.props.onDismiss()
  }

  render() {
    return (
      <AddSoundContainer>
        <h3>Add Sound</h3>
        <input type='text'
          onChange={(e)=>{this.setState({url:e.target.value})}}
          placeholder='url'
          value = {this.state.url}
        />
        <input type='text'
          onChange={(e)=>{this.setState({name:e.target.value})}}
          placeholder='name'
          value = {this.state.name}
        />
        <input type='text'
          onChange={(e)=>{this.setState({description:e.target.value})}}
          placeholder='description'
          value = {this.state.description}
        />
        <button onClick={this.addSound}>Add</button>
        <button onClick={this.props.onDismiss}>Cancel</button>
      </AddSoundContainer>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addSound
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddSoundForm);
