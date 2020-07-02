import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    if( this.state.count === 5 ){
      throw new Error("Some error...");
    }
    return (
      <>
        <h3>{ this.state.count }</h3>
        <button { ...this.props } onClick={ this.handleClick }>{ this.props.children }</button>
      </>
    );
  }
}

export default Counter;