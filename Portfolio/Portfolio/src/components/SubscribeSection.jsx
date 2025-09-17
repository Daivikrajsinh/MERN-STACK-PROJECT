import React from 'react';


const SubscribeSection = () => {
  return (
    <div className="subscribe-section" id="Contact">
      <div className="subscribe-image">
        <img src="/d6b8fbeb-6d90-4bab-8584-97b5a52c4469.jpg" alt="Mailbox" />
        <p className="photo-credit">Photo by Erik Mclean on Pexels</p>
      </div>
      <div className="subscribe-form">
        <h2>Subscribe to get my new articles by email</h2>
        <p>Get an email (max one a week) when I publish articles on my portfolio. You can unsubscribe anytime!</p>
        <form>
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" placeholder="Your Email" required />
          
          <p className="disclaimer">
            One-click unsubscribe anytime, your email will not be used for anything else.
            This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
          </p>

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
