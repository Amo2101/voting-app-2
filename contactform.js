import React, { useState } from 'react';

const HELP_EMAIL = 'votingapphelp@evoting.com';

function ContactUs() {
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Message sent: ${message}`);
    };
  
    return (
      <div>
        <h2>Contact us</h2>
        <p>For any further issues, do not hesitate to contact us in the form below.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Message:
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  
  export default ContactUs;