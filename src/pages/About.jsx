import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Progress
} from "reactstrap";
import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div className=" bg-[#242424] text-white  ">
      <section className="about-us container">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <img
            src="/ballBounce.gif"
            className="rounded-lg w-[300px] lg:w-[600px] "
          ></img>
          <div className="flex-col flex items-center text-center gap-3 justify-center ">
            <h1 className="font-bold text-4xl">About BA$E</h1>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Base is the diamond where legends are made
            </h2>
            <p>
              Ready to knock it out of the park with the funkiest team in the crypto league?
              Ba$eballers is leading the game, minting a squad of 1000 BASE-loving degens who play $BALL on the Base Chain
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                className="flex flex-row gap-2  p-3 rounded-full bg-[#0251fc]"
                onClick={() => (window.location.href = "https://twitter.com/baseballersbase")}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />
              </button>
              <button
                className="flex flex-row gap-2  p-3 rounded-full bg-[#0251fc]"
                onClick={() => (window.location.href = "https://discord.gg/baseballers")}
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />
              </button>
              <button
                className="flex flex-row gap-2  p-3 rounded-full bg-[#0251fc]"
                onClick={() =>
                  (window.location.href = "mailto:bilgi@sigortacozum.com.tr")
                }
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />
              </button>

            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#242424] text-white  ">
        <div className="">
          <section className="container ">
            <div className="flex flex-col gap-3 justify-center align-middle text-center">
              <h1 className="font-bold text-4xl">RoadMap</h1>
              <h2 className=" text-xl text-[#0251fc]">
                Ready to knock it out of the park with the funkiest team in the crypto league? BASEBALLERS is leading the game, rallying a squad of 1000 BASE-loving degens who play $BALL on the base chain.
              </h2>
              <div className="text-center">Phase 0</div>
              <Progress multi>
                <Progress animated bar color="success" value="100" >
                  <h2 className="text-xl font-bold">Token2049 Penthouse Base Party</h2>
                </Progress>
              </Progress>
              <div className="text-center">Phase 1</div>
              <Progress multi>
                <Progress animated bar color="success" value="100" >
                  <h2 className="text-xl font-bold">Community Take Over</h2>
                </Progress>
              </Progress>
              <div className="text-center">Phase 2</div>
              <Progress multi>
                <Progress animated bar color="success" value="100" >
                  <h2 className="text-xl font-bold">Organic Growth</h2>
                </Progress>
              </Progress>
              <div className="text-center">Phase 3</div>
              <Progress multi>
                <Progress animated bar color="danger" value="100" >
                  <h2 className="text-xl font-bold">Development</h2>
                </Progress>
              </Progress>
              <div className="text-center">Phase 4</div>
              <Progress multi>
                <Progress animated bar color="danger" value="100" >
                  <h2 className="text-xl font-bold">Base Take Over</h2>
                </Progress>
              </Progress>
              <div className="text-center">Phase 5</div>
              <Progress multi>
                <Progress animated bar color="danger" value="100" >
                  <h2 className="text-xl font-bold">Airdrop</h2>
                </Progress>
              </Progress>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
