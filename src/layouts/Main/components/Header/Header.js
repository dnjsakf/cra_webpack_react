import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  height: 100px;
  background-color: darkgrey;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <HeaderBox {...this.props}>
        Header
      </HeaderBox>
    );
  }
}
 
export default Header;