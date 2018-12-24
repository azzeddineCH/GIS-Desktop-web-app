import React from 'react';
import { Layout } from 'antd';


export default class Footer extends React.Component {

  componentDidMount() {
  
    
  }

  render() {
    const FooterContainer  = Layout.Footer;
    return(
        <FooterContainer>
            this is the Footer of the App
        </FooterContainer>
    );
  }
}
