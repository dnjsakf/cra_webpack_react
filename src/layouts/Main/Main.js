import React, { Component, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import styled from 'styled-components';

const Header = React.lazy(()=>import('./components/Header'));
const Section = React.lazy(()=>import('./components/Section'));
const Footer = React.lazy(()=>import('./components/Footer'));
const SideBar = React.lazy(()=>import('./components/SideBar'));

const Container = styled.div`
  height: 100%;

  ${({ isDesktop })=>{
    if( isDesktop ){
      return [
        "z-index: 1000;",
        "position: absolute;", 
        "left: 300px;",
        "width: calc(100% - 300px);"
      ];
    }
  }}
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: true
    }
  }
  render() { 
    return (
      <ErrorBoundary>
        <Suspense fallback={ <div>Main Layout Loading...</div>}>
          <SideBar isDesktop={ this.state.isDesktop }/>
            <Container isDesktop={ this.state.isDesktop }>
              <ErrorBoundary>
                <Header />
                <Section color="lightblue" fullWidth>
                  { this.props.children }
                </Section>
                <Footer />
              </ErrorBoundary>
            </Container>
        </Suspense>
      </ErrorBoundary>
    );
  }
}
 
export default Main;