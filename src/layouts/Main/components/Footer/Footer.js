import React, { Component } from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  height: 100px;
  background-color: lightgrey;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <FooterBox {...this.props}>
        Footer
      </FooterBox>
    );
  }
}
 
export default Footer;