import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiApple } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { AiFillCopyrightCircle } from "react-icons/ai";
import "./styles.scss" ;

const personalDetails = [
  {
    label: "Name",
    value: "Parth Dodiya",
  },
  {
    label: "Age",
    value: "19",
  },
  {
    label: "Country",
    value: "India",
  },
  {
    label: "Email",
    value: "parth.dodiya900@gmail.com",
  },
  {
    label: "Contact No.",
    value: "+91 88495 61124",
  },
];

const jobSummary = "Hello, my name is Parth. Currently I am 3rd year Undergraduate Student of Computer Science and Engineering branch at Indian Institue of Technology Bhubaneswar. I am from Rajkot, Gujarat. ";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personal">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translate(-900px)",
            }}
            end={{
              transform: "translate(0px)",
            }}
          >
            <h3>SoftWare Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translate(500px)",
            }}
            end={{
              transform: "translate(0px)",
            }}
          >
            <h3 className="personalInformation">Personal Information</h3>
            <ul>
              {personalDetails.map((intem, i) => (
                <li key={i}>
                  <span className="title">{intem.label}</span>
                  <span className="value">{intem.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_services">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translate(600px)",
            }}
            end={{
              transform: "translate(0px)",
            }}
          >
          <div className="about_content_services_innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <AiFillCopyrightCircle
                size={60}
                color="var(--yellow-theme-main-color)"
              />
            </div>
          </div>
          </Animate>


        </div>

      </div>
    </section>
  );
};

export default About;
