import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  }
  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <Animate
          play
          duration={2.5}
          start={{
            width: "0%",
          }}
          end={{
            width: "100%",
          }}
          easeType="linear"
        >
          <h1>
            Hello, I'm Parth
            <br />
            SoftWare Developer.
          </h1>
        </Animate>
        <Animate
          play
          duration={2.5}
          start={{
            transform: "translateY(500px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          
          <div className="buttons">
            <button onClick={handleNavigateToContactMePage}>Contact Me</button>
            <a
              href="https://drive.google.com/file/d/1kFH9OYH6JbVvi67m3ukUUYwzrG4HgYA6/view?usp=sharing"
              target="_blank"
            >
              <button>Resume</button>
            </a>
          </div>
        </Animate>

        <Animate
          play
          duration={2.5}
          start={{
            transform: "translateY(500px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          
          <div className="links">
            <a
              href="https://www.facebook.com/share/ZR6cLLVoNQPmKXL4/?mibextid=LQQJ4d"
              target="_blank"
            >
              <FaFacebook size={40} />
            </a>
            <a href="https://github.com/Parthdodiya1230" target="_blank">
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/parth-dodiya-432402283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://www.instagram.com/parth.dodiya900?igsh=amEybzR2OXc4Z3Yx&utm_source=qr"
              target="_blank"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
