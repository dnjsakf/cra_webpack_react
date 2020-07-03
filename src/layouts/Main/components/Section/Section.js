import React, { Component } from 'react';
import styled from 'styled-components';

const SectionBox = styled.div`
  height: calc( 100% - 200px );
  
  width: ${ ({ fullWidth }) => fullWidth ? "100%" : "300px" };

  ${({ color })=>{
    if( color ){
      return "background-color: "+color+";";
    }
  }}

  &:hover {
    cursor: pointer;
  }
`;

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <SectionBox {...this.props}>
        { this.props.children }
      </SectionBox>
      );
  }
}
 
export default Section;