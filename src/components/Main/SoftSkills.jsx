import React from "react";
import {
  GiBookshelf,
  GiCheckboxTree,
  GiClockwork,
  GiGears,
  GiTeamIdea,
  GiPencilRuler,
  GiHandWing,
  GiBrain,
  GiTechnoHeart,
  GiBookmarklet,
} from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

const SoftSkills = () => {
  return (
    <div id="skillsSS" className="container">
      <div className="skills">
        <div data-aos="zoom-in-up" className="skillHeader">
          <h2>Soft Skills</h2>
        </div>
        <div className="skillCard">
          {/* Cards das softs skills */}
          <div
            data-aos-duration="1100"
            data-aos="flip-left"
            className="skillIcon"
          >
            <GiBookmarklet size={80} />
            <p>Aprendizado ativo</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-right"
            className="skillIcon"
          >
            <GiBookshelf size={80} />
            <p>Autodidata</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-left"
            className="skillIcon"
          >
            <GiPencilRuler size={80} />
            <p>Criativo</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-right"
            className="skillIcon"
          >
            <GiBrain
              style={{
                transform: "scaleX(-1)",
              }}
              size={80}
            />
            <p>Pensamento crítico</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-left"
            className="skillIcon"
          >
            <BsPeopleFill size={80} />
            <p>Comunicativo</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-right"
            className="skillIcon"
          >
            <GiTeamIdea size={80} />
            <p>Trablho em equipe</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-left"
            className="skillIcon"
          >
            <GiClockwork size={80} />
            <p>Gestão de tempo</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-right"
            className="skillIcon"
          >
            <GiGears size={80} />
            <p>Adaptável</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-left"
            className="skillIcon"
          >
            <GiHandWing size={80} />
            <p>Motivado</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-right"
            className="skillIcon"
          >
            <GiCheckboxTree size={80} />
            <p>Dedicado</p>
          </div>
          <div
            data-aos-duration="1100"
            data-aos="flip-left"
            className="skillIcon"
          >
            <GiTechnoHeart size={80} />
            <p>Empático</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
