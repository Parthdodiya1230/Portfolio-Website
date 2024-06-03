import React, { useRef } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { IoIosContact } from "react-icons/io";
import { Animate } from "react-simple-animate";
import emailjs from '@emailjs/browser';
import './styles.scss'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_18by0kt', 'template_yn3arwi', form.current, {
        publicKey: 'UeZb6peYOKVLiXjGG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your mail has been sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('your mail is not sent');
        },
      );

      e.target.reset();
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<IoIosContact size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translate(-200px)",
          }}
          end={{
            transform: "translate(0px)",
          }}
        >
          <h3 className="contact_content_header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translate(200px)",
          }}
          end={{
            transform: "translate(0px)",
          }}
        >
          <div className="contact_content_form">
            <form className="contact_content_form_controls" ref={form} onSubmit={sendEmail}>
              <div>
                <input required name="from_name" className="inputName" type={"text"}></input>
                <label htmlFor="from_name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input required
                  name="from_email"
                  className="inputEmail"
                  type={"text"}
                ></input>
                <label htmlFor="from_email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea required
                  name="message"
                  className="inputDescription"
                  type={"text"}
                  rows={5}
                />
                <label htmlFor="message" className="descriptionLabel">
                  Description
                </label>
              </div>
              <div>
              </div>
              <div className="submit-btn">
                <input className="submit" type="submit" value="Submit"/>
              </div>
            </form>
            {/* <button>Submit</button> */}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
