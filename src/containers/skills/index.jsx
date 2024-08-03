import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsdata } from "../../utils/skillsdata";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />
      <div className="skills_content">
        {skillsdata.map((item, i) => (
          <div key={i} className="skills_content_inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translate(-200px)",
              }}
              end={{
                transform: "translate(0px)",
              }}
            >
              <h3 className="skills_content_inner-content_catagory" >
                {item.label}
              </h3>
              <div className="progressBar-container" >
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount={1}
                    key={j}
                  >
                    <div className="progressBar" >
                      <p >{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
