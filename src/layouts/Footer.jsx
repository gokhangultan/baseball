import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email subscribed:", email);
  };
  return (
    <div className="bg-[#242424] text-white">
      <div className="container py-5 ">
        <div className="flex  justify-center items-center align-middle py-5">
          <img src="./basedball.png" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center  gap-3">
          <Link to="/">
            <div>
              <img
                src="/logo-transparent.png"
                className="lg:max-w-[120px] max-w-[120px] object-contain  "
              />
            </div>
          </Link>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex gap-3">
              <a href="" target="_blank">
                <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    style={{ color: "#0251fc" }}
                  />
                </button>
              </a>
              <a href="" target="_blank">
                <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    style={{ color: "#0251fc" }}
                  />
                </button>
              </a>
              <a href="" target="_blank">
                <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="lg"
                    style={{ color: "#0251fc" }}
                  />
                </button>
              </a>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <h5 className="footer-title">Get In Touch</h5>
              <form onSubmit={handleSubmit} className="flex flex-row ">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleInputChange}
                  className="pl-2 py-3 rounded-md border-1 border-[#E6E6E6]  bg-[#242424] text-white"
                />
                <button
                  type="submit"
                  className="bg-[#0251fc] text-[#E6E6E6] rounded-md border-1 w-[117px] h-[58px] hover:bg-white hover:primary-text hover:border-[#0251fc]"
                >
                  Subscribe
                </button>
              </form>
              <p className="secondary-text  text-xs leading-7">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
