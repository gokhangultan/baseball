import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Progress,
  Table,
} from "reactstrap";
import { useState } from "react";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="bg-[#242424] text-white">
      <div className=" home-slider flex flex-col md:flex-row justify-around items-center py-2 container gap-3 ">
        <div className="flex basis-[2/5] flex-col items-center llsis-3/4 gap-2">
          <div>
            <h5 className="font-2xl:bold 2xl:text-[16px] xl:text-[16px] lg:text-sm md:text-xs sm:text-xs text-[16px]  leading-[24px]">
              Base $BALL since 2024
            </h5>
          </div>
          <div>
            <h1 className="font-bold text-[40px] lg:text-[58px]  leading-[80px]">
              $BALL
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
                EXCHANGE
              </button>
            </Link>
          </div>
        </div>
        <div className="flex basis-[3/5]">
          <img src="/ballBounce.gif" />
        </div>
      </div>
      <div className="home-info flex flex-col items-center bg-[url('/info-bg.jpg')] my-10">
        <div className="flex flex-col gap-3 justify-center text-center items-center mb-5">
          <h2 className="text-[#0251fc] font-bold leading-5 uppercase text-xl tracking-widest ">
            What We Offer
          </h2>
          <h1 className="font-bold leading-5 uppercase text-3xl tracking-widest">
            Lorem ipsum
          </h1>
        </div>
        <div className="offers flex flex-col lg:flex-row justify-between gap-5 container">
          <div className="flex flex-col items-center text-center gap-4 basis-[22%]">
            <img src="/baseball22.png" className="object-contain w-[84px] bg-[#0251fc] rounded-full p-2" />
            <h5 className="header-nav text-lg tracking-widest ">Title1</h5>
            <p className="font-sans text-base tracking-widest">
              The official Base Dubai token2049 party will be like in your wildest and crazy dreams, with degen plays, wet T-shirt contests, rolling some dices, beer pong games and hosting some truth or dare sessions, just like if you were in high-school again.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 basis-[22%]">
            <img src="/baseball.png" className="object-contain w-[84px] bg-white rounded-full p-2" />
            <h5 className="header-nav text-lg tracking-widest ">Title2</h5>
            <p className="font-sans text-base tracking-widest">
              This is not limited to other fun games but is limited by your mothers’explicit parental restrictions or your geographical location.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 basis-[22%]">
            <img src="/baseball-field.png" className="object-contain w-[84px] bg-[#0251fc] rounded-full p-2" />
            <h5 className="header-nav text-lg tracking-widest ">Title3</h5>
            <p className="font-sans text-base tracking-widest">
              If you want to be part of this exclusive penthouse event, you will need to be inside of our private sale. We will not disclose the different whales and communities that we already have collaborated with. But we can assure you that we will be trending and take over the base chain.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 basis-[22%]">
            <img src="/baseball-player.png" className="object-contain w-[84px] bg-white rounded-full p-2" />
            <h5 className="header-nav text-lg tracking-widest ">Title4</h5>
            <p className="font-sans text-base tracking-widest">
              If you want to be invited to the official base token2049 event you will need to join our discord, telegram community and like, follow and RT our inaugural post: (link)
              We only have limited spots available and will announce the winners in the next 48 hours.
            </p>
          </div>
        </div>
      </div>
      <section className="about-us container my-10 py-5">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <img
            src="/ballHit.gif"
            className="rounded-lg w-[300px] lg:w-[600px] "
          ></img>
          <div className="flex-col flex items-center text-center gap-3 justify-center ">
            <h1 className="font-bold text-4xl">About $BALL</h1>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Base ballers are 1000 random degens that play on the base chain.             </h2>
            <p>
              Say goodbye to network congestion with failed transactions and high gas fees.

              Become a $BALLer and get VIP access to BASE Most Valuable Player series.

              BASE is designed to hit that 1000x grand slam building a community for those that want to play $BALL

              Will you hit BASE and a home run or you wait until it’s SOL(D) out?

              Cont’d

            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                className="flex flex-row gap-2  p-3 rounded-full bg-[#0251fc]"
                onClick={() => (window.location.href = "tel:+902324842829")}
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />{" "}
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
                onClick={() => (window.location.href = "tel:+905554801111")}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />{" "}
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
                onClick={() => (window.location.href = "tel:+902324842829")}
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
                onClick={() => (window.location.href = "tel:+905554801111")}
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
                onClick={() => (window.location.href = "tel:+902324842829")}
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />{" "}
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
                onClick={() => (window.location.href = "tel:+905554801111")}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />{" "}
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
        <h1 className="font-bold text-4xl">FAQ</h1>
        <h2 className="font-bold text-2xl text-[#0251fc]">
          Will you hit BASE and a home run or you wait until it’s SOL(D) out?
        </h2>
        {/* 
        <div className="bg-[#242424] text-white">
          <Accordion
            flush
            open={open}
            toggle={toggle}
            className={"font-bold text-md p-4 bg-[#242424] text-white"}
          >
            <AccordionItem className={"bg-[#242424] text-white"}>
              <AccordionHeader targetId="1" className={"bg-[#242424] text-white"} >
                Strong Partnerships
              </AccordionHeader>
              <AccordionBody
                flush
                accordionId="1"
                className="bg-[#242424] text-white"
              >
                <strong>
                  BALL has forged strategic partnerships with leading companies
                  in the crypto space
                </strong>
                , which will help to ensure the project's <code>long-term</code>{" "}
                viability and growth .
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="bg-[#242424] text-white">
              <AccordionHeader targetId="2" className="bg-[#242424] text-white">
                Growing Ecosystem
              </AccordionHeader>
              <AccordionBody
                accordionId="2"
                className="bg-[#242424] text-white"
              >
                <strong>
                  The Base Chain's ecosystem is rapidly expanding, with numerous
                  projects and applications being built on the platform.
                </strong>
                This growing ecosystem provides a strong foundation for BALL's
                success, as it allows the platform to leverage the resources and
                expertise of other projects in the space. As the Base Chain
                continues to grow, so too will the potential for{" "}
                <code> BALL</code> to thrive and expand its offerings. the
                transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="bg-[#242424] text-white">
              <AccordionHeader targetId="3" className="bg-[#242424] text-white">
                Strong Community Support
              </AccordionHeader>
              <AccordionBody
                accordionId="3"
                className="bg-[#242424] text-white"
              >
                <strong>
                  The Base Chain and BALL have garnered significant support from
                  the crypto community, with many prominent figures expressing
                  their bullish outlook on the project.
                </strong>
                This strong community backing provides a solid foundation for
                the project's growth and success, as it ensures that there is a
                dedicated user base to support and <code>promote</code> the
                memecoin and blockchain
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
        */}
      </section>

    </div>
  );
}
