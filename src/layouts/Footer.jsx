import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {

  return (
    <div className="bg-[#242424] text-white">
      <div className="container py-5 ">
        <div className="flex justify-center items-center align-middle py-5">
          <img src="./ballSpin.gif" />
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
              <a href="https://twitter.com/baseballersbase" target="_blank">
                <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2xl"
                    style={{ color: "#0251fc" }}
                  />
                </button>
              </a>
              <a href="https://discord.gg/baseballers" target="_blank">
                <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    size="2xl"
                    style={{ color: "#0251fc" }}
                  />
                </button>
              </a>
              <a href="" target="_blank">
                <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
                  <FontAwesomeIcon
                    icon={faTelegram}
                    size="2xl"
                    style={{ color: "#0251fc" }}
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
