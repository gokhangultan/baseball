import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  Table,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const aboutSectionData = [
  {
    img: "/baseball22.png",
    title: "Series",
    description: "Become a BA$E baller and get VIP access to the Base Most Valuable Player series"
  },
  {
    img: "/baseball.png",
    title: "Community",
    description: "Base is designed to hit that 1000x grand slam building a community for those that want to play $BALL"
  },
  {
    img: "/baseball-field.png",
    title: "Belonging",
    description: "Will you hit BASE and a home run or you wait until it’s SOL(D) out?"
  },
]


export default function Home() {
  return (
    <div className="bg-[#242424] text-white">
      <div className=" home-slider flex flex-col md:flex-row justify-around items-center py-2 container gap-3 ">
        <div className="flex basis-[2/5] flex-col items-center llsis-3/4 gap-2">
          <div>
            <h1 className="font-bold text-[40px] lg:text-[58px]  leading-[80px]">
              BA$E
            </h1>
          </div>
          <div>
            <h4 className=" text-2xl text-center leading-[30px] ">
              Do you want to hit 1000x?
            </h4>
          </div>

          <div>
            <Link to="/">
              <button className="bg-[#0251fc] px-4 py-3 rounded-lg text-white font-bold">
                MINT
              </button>
            </Link>
          </div>
        </div>
        <div className="flex basis-[3/5]">
          <img src="/ballHit.gif" />
        </div>
      </div>
      <div className="home-info flex flex-col items-center bg-[url('/info-bg.jpg')] my-10">
        <div className="flex flex-col gap-3 justify-center text-center items-center mb-5 max-w-[70%]">
          <h2 className="text-[#0251fc] font-bold leading-5 uppercase text-xl tracking-widest ">
            Say goodbye to network congestion with failed transactions and gas wars.
          </h2>
          <h1 className="font-bold leading-8 uppercase text-3xl tracking-widest">
            Ba$e Ballers are 1000 random degens that play on the Base Chain
          </h1>
        </div>

        <div className="offers flex flex-col lg:flex-row justify-between gap-5 container">
          {
            aboutSectionData.map((item, index) => {
              return <div key={index} className="flex flex-col items-center text-center gap-4 basis-[22%]">
                <img src={item.img} className={"object-contain w-[84px] rounded-full p-2 " + (index % 2 === 0 ? "bg-[#0251fc]" : "bg-white")} />
                <h5 className="header-nav text-lg tracking-widest ">{item.title}</h5>
                <p className="font-sans text-base tracking-widest">
                  {item.description}
                </p>
              </div>
            })
          }
        </div>
      </div>
      <section className="about-us container my-10 py-5">
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
            <div className="flex flex-row gap-2">
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

      <img src="./baseballers.png" className="py-5 w-full max-w-[1450px] mx-auto my-0" />
      {/* 
      <section className="container py-5">
        <div className="text-center flex flex-col gap-2 justify-center py-2 items-center">
          <h1 className="font-bold text-4xl">Token Info</h1>
          <h2 className=" text-xl text-[#0251fc]">
            Will you hit BASE and a home run or you wait until it’s SOL(D) out?
          </h2>
        </div>

        <Table dark className="text-center text-2xl ">
          <thead className="text-center ">
            <tr >
              <th>Token name</th>
              <th>$BALL </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Token chain</th>
              <td>Base </td>

            </tr>
            <tr>
              <th scope="row">Supply</th>
              <td>1000 unique BALLER$</td>

            </tr>
            <tr>
              <th scope="row">Traits</th>
              <td>150</td>

            </tr>
            <tr>
              <th scope="row">Contract address</th>
              <td>XXXXX</td>

            </tr>
            <tr>
              <th scope="row">Token royalties</th>
              <td>5% 2,5 artist 2,5 to holders</td>

            </tr>
          </tbody>
        </Table>
      </section>
      */}
      <section className="base-ball container my-10">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <img
            src="/about1.gif"
            className="rounded-lg w-[300px] lg:w-[600px] "
          ></img>
          <div className="flex-col flex items-center text-center gap-3 justify-center mb-3">
            <h1 className="font-bold text-4xl">$BALL</h1>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Ready to knock it out of the park with the funkiest team in the crypto league?</h2>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              BASEBALLERS is leading the game, rallying a squad of 1000 BASE-loving degens who play $BALL on the base chain.</h2>
            <div className="flex gap-2">
              <button
                className="flex p-3 rounded-full bg-[#0251fc]"
                onClick={() => (window.location.href = "https://discord.gg/baseballers")}
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-2xl"
                  style={{ color: "#ffffff" }}
                />
              </button>
              <button
                className="flex p-3 rounded-full bg-[#0251fc]"
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
              <button
                className="flex p-3 rounded-full bg-[#0251fc]"
                onClick={() => (window.location.href = "https://twitter.com/baseballersbase")}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex-col flex items-center text-center gap-3 justify-center ">
            <h1 className="font-bold text-4xl"> $BALL</h1>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Base is the diamond where legends are made, and we’re swinging for that 1000x grand slam.             </h2>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Join our community and be part of the BASE tribe and revolution who are ready to play the long game.            </h2>

            <div className="flex flex-col sm:flex-row gap-2">
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
            </div>
          </div>
          <img
            src="/about2.gif"
            className="rounded-lg w-[300px] lg:w-[600px] "
          ></img>
        </div>
      </section>
      <section className="home-programs container flex flex-col text-center gap-3">
        <h1 className="font-bold text-4xl"></h1>
        <h2 className="font-bold text-2xl text-[#0251fc]">
        </h2>
      </section>
    </div>
  );
}
