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

      <div className="container collection-text">
        <div className="pt-[100px]  ">
          <p className="text-sm leading-5 text-[#E74040] mb-3">
            Problems trying
          </p>

          <div className="flex md:flex-row flex-col justify-between gap-[80px]">
            <div className="flex basis-1/3">
              <h3 className="font-bold text-2xl leading-8 text-[#0251fc]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>
            <div className="flex basis-2/3">
              <p className="text-secondaryColor text-sm leading-5 text-start">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>

        <div className=" text-center py-5 ">
          <div className="flex md:flex-row flex-col gap-3 justify-between">
            <div className="flex-col">
              <h1 className="font-bold text-6xl leading-[80px] text-[#0251fc]">
                15K
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Happy Customers
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#0251fc]">
                150K
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Monthly Visitors
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#0251fc]">
                15
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Countries Worldwide
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#0251fc]">
                100+
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Top Partners
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#242424] text-white  py-[100px] ">
        <div className="flex flex-col text-center gap-5  ">
          <h2 className="text-[#0251fc] font-bold text-[40px] leading-[40px]">
            Big Companies Are Here
          </h2>
          <p className="text-sm text-secondaryColor leading-5 ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="py-5">
          <section className="container py-5">
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
