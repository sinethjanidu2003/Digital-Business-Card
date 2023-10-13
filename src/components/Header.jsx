import React from "react";



export default function Header (){


    const emailMe = () =>{
        const email = 'test@example.com';
        const subject = 'From My Portfolio'; 
        const body = 'Hi there, I want to get in touch with you.'; 
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        
      }

    return (
       <>
       <h2>Laura Smith</h2>
        <div className='title'> 
            Frontend Developer
        </div>
        <div className='website'> 
            Laurasmith.website
        </div>

      <button className='emailBtn' onClick={emailMe} >Email Me </button>
       </>
    )
}