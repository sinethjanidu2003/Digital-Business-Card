import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faGithub,faFacebook,faInstagram, faTwitter , faTwitch} from '@fortawesome/free-brands-svg-icons';


export default function Footer (){
    return (
        <div className='footer'> 
          <button className='footerBtn'><FontAwesomeIcon icon={faGithub} style={{ width: '15px', height: '15px' }}/></button>
          <button className='footerBtn'><FontAwesomeIcon icon={faFacebook} style={{ width: '15px', height: '15px' }}/></button>
          <button className='footerBtn'><FontAwesomeIcon icon={faInstagram} style={{ width: '15px', height: '15px' }}/></button>
          <button className='footerBtn'><FontAwesomeIcon icon={faTwitch} style={{ width: '15px', height: '15px' }}/></button>
          <button className='footerBtn'><FontAwesomeIcon icon={faTwitter} style={{ width: '15px', height: '15px' }}/></button>
      </div>
    )
}