import { useRef, useState } from "react";
import {
  faBars,
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderNavBar from "../components/HeaderNavBar";
import { useEffect } from "react";

export default function Header() {

  const audioRef = useRef(null);

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);


  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const clickListenerFn = () => {
    togglePlay();
    window.removeEventListener('click', clickListenerFn);
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    window.addEventListener('load', function () {
      window.addEventListener('click', clickListenerFn);
    });
  }, [])

  return (
    <div className="bg-[#242424] text-white py-2">
      <div>
        <audio ref={audioRef} src="sound.mp3" id="player" loop />
      </div>
      <div className="container ">
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div className="flex items-center basis-1/12">
            <img
              src="/logo-transparent.png"
              className="lg:max-w-[80px] max-w-[80px] object-contain  "
            />
          </div>
          <nav className="hidden lg:flex flex-col sm:flex-row justify-between gap-3 header-nav basis-6/12">
            <HeaderNavBar setIsNavVisible={setIsNavVisible} />
          </nav>
          <div className="flex  flex-row justify-between gap-5 items-center basis-1/12">
            <button
              onClick={togglePlay}
            >
              <FontAwesomeIcon
                icon={isPlaying ? faVolumeHigh : faVolumeXmark}
                className="text-2xl "
                style={{ color: "#0251fc" }}
              />
            </button>
            <button
              className="flex lg:hidden text-2xl"
              onClick={toggleNavVisibility}
              style={{ color: "#0251fc" }}
            >
              <FontAwesomeIcon icon={faBars} className="text-4xl" />
            </button>
          </div>
        </div>
        <nav
          className={`mobile-menu flex flex-col justify-between gap-3 items-center my-2 header-nav lg:hidden ${isNavVisible ? "" : "hidden"}`}
        >
          <HeaderNavBar setIsNavVisible={setIsNavVisible} />
        </nav>
      </div>
    </div>
  );
}
