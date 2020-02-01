import React from 'react';
import {Flex, Link} from 'rebass';

const FooterDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};
const FooterStyle ={
    lex: '1'
};


function Footer (){
    return (
        <div style={FooterDivStyle}>
           <Flex style={FooterStyle}>
               <Link href='#'>
                   Contact Us 
               </Link>
               <Link href='#'>
                   FAQs
               </Link>
           </Flex>
        </div> 
    )
};

export default Footer;