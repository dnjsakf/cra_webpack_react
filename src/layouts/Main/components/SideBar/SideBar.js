import React, { Component } from 'react';
import styled from 'styled-components';

const SideBarBox = styled.div`
  z-index: 2000;
  position: absolute;
  width: 300px;
  height: 100%;

  ${({ isDesktop })=>{
    if( !isDesktop ){
      return "left: -300px;"
    }
  }}
`;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <SideBarBox {...this.props}>
        SideBar
      </SideBarBox>
    );
  }
}
 
export default SideBar;