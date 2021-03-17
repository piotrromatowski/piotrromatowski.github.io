import React from "react";

function Contact() {
  return (
    <>
      <section className="contact-us">
        <div className="newsletter">
          <form>
            <p>Sign up to our newsletter</p>
            <input
              className="mail"
              type="email"
              placeholder="enter your email adress"
            />
            <button type="submit">sign up now</button>
          </form>
        </div>
      </section>
      <section className="locations">
        <h2>
          Our Locations<span></span>
        </h2>
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40014424.886643104!2d20.98493308613332!3d52.25633907587232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1615402624283!5m2!1sen!2spl"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
