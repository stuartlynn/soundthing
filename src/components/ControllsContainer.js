import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components'
import SoundLibrary from './SoundLibrary';
import SourceList from './SourceList';

const ControllsContainerOuter = styled.div`
  width: 20%;
  max-width: 500px;
  min-width: 280px;
  border: 1px solid red;
  height: 100%;
  position:relative;
`
const Tabs  = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom:20px;
`
const Tab = styled.p`
  color: palevioletred;
  cursor: pointer;
`

class ControllsContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state={
    show: 'sounds'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ControllsContainerOuter >
        <Tabs>
          <Tab onClick={()=> this.setState({show:'sounds'})}>Sounds</Tab>
          <Tab onClick={()=>this.setState({show:'sources'})}>Sources</Tab>
        </Tabs>
        { this.state.show==='sounds' ?
          (<SoundLibrary />)
          :
          (<SourceList />)
        }

      </ControllsContainerOuter>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ControllsContainer);
