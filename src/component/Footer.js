import React from 'react';
import { Layout } from 'antd';
import { log } from 'util';


export default class Footer extends React.Component {

  constructor(props){
    super(props)
   

    
  }

 

  

  render() {
    const FooterContainer  = Layout.Footer;
    return(
        <FooterContainer className="footer">
             <div id="mousePositionContainer">
                      <span id="mouse-position"></span>
             </div>
        </FooterContainer>
    );
  }
}
