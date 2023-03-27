import React from "react";

import logo from "../../assets/logo.svg";
import bgC from "../../assets/bgC2.svg";

const Contact = () => {
  return (
    <div
      data-aos="flip-left"
      style={{
        backgroundImage: `url(${bgC})`,
      }}
      className="formCont"
    >
      <img src={logo} alt="" />
      <form
        action="https://formsubmit.co/rhoglas.aragao@gmail.com"
        method="POST"
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nome
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Example"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Endereço de e-mail
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Mensagem
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            required
          ></textarea>
        </div>
        <input
          type="hidden"
          name="_next"
          value="http://localhost:5173/success"
        />
        {/* <input type="hidden" name="_captcha" value="false" /> */}
        <input
          type="hidden"
          name="_autoresponse"
          value="Recebi sua mensagem, logo responderei! "
        />
        <button className="btn0 " type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
