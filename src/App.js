import React from 'react';

import Counter from './components/Counter/Counter';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggle: this.props.toggle,
      hasError: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  /**
   *  Handlers
   **/
  handleToggle( event ){
    console.log("handleToggle", event);
    this.setState((state, props)=>(Object.assign(state, {
      toggle: !state.toggle
    })));
  }

  /**
   *  Life Cycle 
   **/
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error);
    return { hasError: true };
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.group("shouldComponentUpdate");
    console.log("nextProps:", nextProps);
    console.log("nextState:", nextState);
    console.groupEnd("shouldComponentUpdate");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.group("getSnapshotBeforeUpdate");
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    console.groupEnd("getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.group("componentDidUpdate");
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    console.log("snapshot:", snapshot);
    console.groupEnd("componentDidUpdate");
  }

  componentDidCatch(error, info){
    console.group("componentDidCatch");
    console.log("error:", error);
    console.log("info:", info);
    console.groupEnd("componentDidCatch");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render(){
    return (
      <>
        <h3>Hello, Webpack!!!</h3>
        <div>
          <ErrorBoundary>
            <Counter
              id="throw_error"
              onClick={ this.handleToggle }
            >
              ErrorEvent
            </Counter>
          </ErrorBoundary>
        </div>
      </>
    )
  }
}

App.defaultProps = {
  toggle: false
};

export default App;