import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { IoIosContact } from "react-icons/io";
import { Animate } from "react-simple-animate";
import './styles.scss'

const Contact = () => {
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
            <form className="contact_content_form_controls">
              <div>
                <input required name="name" className="inputName" type={"text"}></input>
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                ></input>
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows={5}
                />
                <label htmlFor="description" className="descriptionLabel">
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
