import React, { useState } from "react";
import {
  faBars,
  faBaseball,
  faBaseballBatBall,
  faExchange,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
203682;
export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <div className="bg-[#242424] text-white py-2">
      <div className="container ">
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div>
            <img
              src="/logo-transparent.png"
              className="lg:max-w-[80px] max-w-[80px] object-contain  "
            />
          </div>
          <nav className=" hidden lg:flex flex-col sm:flex-row justify-between gap-3 basis-2/6 header-nav ">
            <Link to="/">
              {" "}
              <button className="  hover:text-[#203682]">Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>{" "}
            <Link to="/team">
              {" "}
              <button>Team</button>
            </Link>
            <Link to="/contact">
              <button>Contact</button>{" "}
            </Link>
            <Link to="/faq">
              <button>FAQ</button>{" "}
            </Link>
          </nav>
          <div className="flex  flex-row justify-between gap-5 basis-1/12 items-center ">
            <button>
              <FontAwesomeIcon
                icon={faExchange}
                className="text-2xl "
                style={{ color: "#203682" }}
              />
            </button>
            <button
              onClick={() => (window.location.href = "tel:+902324842829")}
            >
              <FontAwesomeIcon
                icon={faBaseball}
                className="text-2xl "
                style={{ color: "#203682" }}
              />
            </button>
            <button
              onClick={() => (window.location.href = "tel:+902324842829")}
            >
              <FontAwesomeIcon
                icon={faBaseballBatBall}
                className="text-2xl "
                style={{ color: "#203682" }}
              />
            </button>
            <button
              className="flex lg:hidden text-2xl"
              onClick={toggleNavVisibility}
              style={{ color: "#203682" }}
            >
              <FontAwesomeIcon icon={faBars} className="text-4xl" />
            </button>
          </div>
        </div>
        <nav
          className={` mobile-menu flex flex-col justify-between gap-3 items-center my-2 header-nav ${
            isNavVisible ? "" : "hidden"
          }`}
        >
          <Link to="/">
            {" "}
            <button className="  hover:text-[#203682]">Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>{" "}
          <Link to="/team">
            {" "}
            <button>Team</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>{" "}
          </Link>
          <Link to="/faq">
            <button>FAQ</button>{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
}
