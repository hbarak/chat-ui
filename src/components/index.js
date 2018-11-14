
//This is your top level React component, you may change everything

import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components';
import ChatBox from "./MessageBox";

const Logo = styled.div`
      img{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        float:left;
      }
      
`;




class App extends React.PureComponent {
  render() {
    return(
      <span>
        <Container className={'spotim-header'}>
        <Logo>
          <Image size={'tiny'} src={logo}/>
        </Logo>

          <div className={'spotim-title'}>
            Welcome to the Spot.IM Chat app
          </div>
          <div>

          </div>
        </Container>
        <Container>
          <ChatBox></ChatBox>
        </Container>
      </span>
    );
  }
}
export default App;