import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g6gdghu', 'template_stvjl9n', form.current, 'cWS7vJiKNDqpE9shR')
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Let's Connect</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
            <h3 className="contact__title">Let's talk</h3>

            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>

                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">user@gmail.com</span>

                    <a href="mailto:examplemail@gmail.com.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>
                <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>

                    <h3 className="contact__card-title">Whatsapp</h3>
                    <span className="contact__card-data">999-999-99-99</span>

                    <a href="https://api.whatsapp.com/send?phone=7025223151&text=Hello there" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>
                <div className="contact__card">
                    <i className="bx bxl-messenger contact__card-icon"></i>

                    <h3 className="contact__card-title">Messenger</h3>
                    <span className="contact__card-data">user.fb001</span>

                    <a href="https://m.me" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>
            </div>
        </div>

        <div className="contact__content">
            <h3 className="contact__title">Let me know your project</h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form-div">
                    <label className="contact__form-tag">Name</label>
                    <input type="text" name="name" className="contact__form-input" placeholder="Enter your name" />
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag">Email</label>
                    <input type="email" name="email" className="contact__form-input" placeholder="Enter your email" />
                </div>
                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag">Project</label>
                    <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write about the project"></textarea>
                </div>
                <button className="button button-flex">
                    Send Message &nbsp;
                    <i className="bx bx-send contact--icon"></i>
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
