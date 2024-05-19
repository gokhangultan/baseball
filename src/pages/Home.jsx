import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  Table,
} from "reactstrap";
import {
  faBars,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faSquareXTwitter,
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
           
          <a href="https://www.dextools.io/app/en/base/pair-explorer/0x466a105e839a94c12bc8ad534d3b3a192f99c0ae?t=1716142843005" target="_blank">
  <button className="bg-[#0251fc] px-4 py-3 rounded-lg text-white font-bold">
    BUY NOW
  </button>
</a>

          
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
          BA$E BALLERS ARE DEGENS THAT PLAY ON THE BASE CHAIN
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
            Base is the diamond where legend are made!            </h2>
            <p>
            Ready to knock it out of the park and get based with the funkiest Meme League Baseball team. Baseballers is leading the game with a squad of Base-loving degens who play BALL on the Base chain.
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
                  (window.location.href = "https://t.me/baseballersofficial")
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
      
      <section className="container py-5">
        <div className="text-center flex flex-col gap-2 justify-center py-2 items-center">
          <h1 className="font-bold text-4xl">Token Info</h1>
          <h2 className=" text-xl text-[#0251fc]">
            Will you hit BASE and a home run or you wait until it’s SOL(D) out?
          </h2>
        </div>
<div className="flex sm:flex-row flex-col justify-between gap-3 pt-5">
<img src="./tokenomic.gif" className="py-5 w-50 mx-auto my-0 basis-1/2" />
<div className="basis-1/2 ">
 <div className="flex justify-center align-middle text-center gap-3">

    <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl bold">
             Baseballers Party
          </h1>
<div className="flex gap-2 flex-row justify-between items-center">
<div>
    
<a href="https://warpcast.com/cryptoarch" target="_blank"> <img src="./warpcast.png" className="py-5 w-8 mx-auto my-0 "  /></a></div>
<a href="https://discord.com/invite/baseballers" target="_blank">    <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-3xl"
                  style={{ color: "#ffffff" }}
                /></a>
                 <a href="https://t.me/baseballersofficial" target="_blank"> <FontAwesomeIcon
                  icon={faTelegram}
                  className="text-3xl"
                  style={{ color: "#ffffff" }}
                /></a>
                <FontAwesomeIcon
                  icon={faGear}
                  className="text-3xl"
                  style={{ color: "#ffffff" }}
                />
</div>
<p>Base is the diamond where legends are made! Ready to knock it out of the park and get based with the funkiest Meme League Baseball team. Baseballers is leading the game with a squad of Base-loving degens who play BALL on the Base chain. 20% for Pumpementals!!</p>
<Table dark className="text-center text-2xl justify-center align-middle ">
          <thead className="text-center justify-center  ">
            <tr >
              <th>PARTY MEMBERS
</th>
              <th>40%
 </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LP POSITION
</th>
              <td>40% </td>

            </tr>
            <tr>
              <th scope="row">RESERVE</th>
              <td>20% <a href="https://basescan.org/address/0x5Ea6D943646a5A5Ba59E79C2Edbd7861F58744bc" target="_blank"></a>
</td>

            </tr>
        
         
       
          </tbody>
        </Table>
       
</div>

</div>
</div>

</div>
<Table dark className="text-center text-2xl justify-center align-middle ">
          <thead className="text-center justify-center  ">
            <tr >
              <th>TOTAL SUPPLY:</th>
              <th>69 MILLION TOKENS </th>
            </tr>
          </thead>
          <tbody>
     
            <tr>
              <th scope="row">NO TAX!!!</th>
              <td>NO TEAM TOKENS!!!
</td>

            </tr>
            <tr>
              <th scope="row">CA:</th>
              <td>0x562bfbc941cd92d6a02eb108fd4413a5b455c467</td>

            </tr>
         
      
          </tbody>
        </Table>
       
      </section>
      
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
                  (window.location.href = "https://t.me/baseballersofficial")
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
        <div className="flex flex-col-reverse md:flex-row gap-5 items-center mt-3">
          <div className="flex-col flex items-center text-center gap-3 justify-center ">
            <h1 className="font-bold text-4xl"> $BALL</h1>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Base is the diamond where legends are made, and we’re swinging for that 1000x grand slam.             </h2>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Join our community and be part of the BASE tribe and revolution who are ready to play the long game.            </h2>

            <div className="flex flex-row gap-2">
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
                  (window.location.href = "https://t.me/baseballersofficial")
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
