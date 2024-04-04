import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../components/Carousel";
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
import {
  faArrowRightArrowLeft,
  faMailBulk,
  faMobilePhone,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { PieChart } from "react-minimal-pie-chart";

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
        <div className=" flex flex-col items-center basis-3/4 gap-2">
          <div>
            <h5 className="font-2xl:bold 2xl:text-[16px] xl:text-[16px] lg:text-sm md:text-xs sm:text-xs text-[16px]  leading-[24px]">
              Since 2024
            </h5>
          </div>
          <div>
            <h1 className="font-bold text-[40px] lg:text-[58px]  leading-[80px]">
              BASE $BALL
            </h1>
          </div>
          <div>
            <h4 className=" text-2xl text-center leading-[30px] ">
              One of cryptos most significant cultural icons and the mascot of
              BASE chain
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
        <div className="flex basis-3/4">
          <img src="baseball-run.gif " className="px-5 " />
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
        <div className="offers flex flex-col sm:flex-row justify-between gap-5 container">
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/icon1.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">Title1</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/icon2.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">Title2</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/icon3.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">Title3</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/icon4.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">Title4</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
        </div>
      </div>
      <section className="about-us container my-10">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <img
            src="/giphy-unscreen.gif"
            className="rounded-lg w-[300px] lg:w-[600px] "
          ></img>
          <div className="flex-col flex items-center text-center gap-3 justify-center ">
            <h1 className="font-bold text-4xl">About $BALL</h1>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet.
            </h2>
            <p>
              Firmamız 1993 yılında İzmir'de Sami Zeybek ve Vildan Zeybek
              tarafından OYAK Sigorta Acenteliği olarak kurulmuştur. Kurulduğu
              günden beri sektörün öncü şirketlerinin acenteliğini yapmıştır.
              Güncel olarak İzmir'de profesyonel olarak acenteliğe devam
              etmektedir.
            </p>
            0251fc
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
      <section className="container py-5">
        <div className="flex flex-col gap-3 justify-center align-middle text-center">
          <h1 className="font-bold text-4xl">RoadMap</h1>
          <h2 className=" text-xl text-[#0251fc]">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Lorem ipsum
            proin gravida nibh vel velit auctor aliquet. Lorem ipsum proin
            gravida nibh vel velit auctor aliquet. Lorem ipsum proin gravida
            nibh vel velit auctor aliquet. Lorem ipsum proin gravida nibh vel
            velit auctor aliquet.
          </h2>
          <div className="text-center">PRESALE</div>
          <Progress multi>
            <Progress animated bar color="success" value="20" />
            <Progress animated bar color="info" value="25" />
            <Progress animated bar color="warning" value="20" />
            <Progress animated bar color="danger" value="45" />
          </Progress>
          <div className="text-center">With Labels</div>
          <Progress multi>
            <Progress bar value="15">
              <h2 className="text-xl font-bold">Meh</h2>
            </Progress>
            <Progress animated bar color="success" value="35">
              <h2 className="text-xl font-bold"> Wow!</h2>
            </Progress>
            <Progress animated bar color="warning" value="25">
              <h2 className="text-xl font-bold"> %25</h2>
            </Progress>
            <Progress animated bar color="danger" value="25">
              <h2 className="text-xl font-bold"> %100 SOLD OUT!</h2>
            </Progress>
          </Progress>
          <div className="text-center">Stripes and Animations</div>
          <Progress multi>
            <Progress bar striped value="15">
              <h2 className="text-xl font-bold"> PROGRESS</h2>
            </Progress>
            <Progress animated bar color="success" value="50">
              <h2 className="text-xl font-bold"> %100 SOLD OUT!</h2>
            </Progress>
            <Progress animated bar color="info" value="35">
              <h2 className="text-xl font-bold"> PLAIN</h2>
            </Progress>
          </Progress>
        </div>
      </section>
      <section className="container py-5">
        <div className="text-center flex flex-col gap-2 justify-center py-2 items-center">
          <h1 className="font-bold text-4xl">TOKENOMICS</h1>
          <h2 className=" text-xl text-[#0251fc]">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Lorem ipsum
            proin gravida nibh vel velit auctor aliquet. Lorem ipsum proin
            gravida nibh vel velit auctor aliquet. Lorem ipsum proin gravida
            nibh vel velit auctor aliquet. Lorem ipsum proin gravida nibh vel
            velit auctor aliquet.
          </h2>
        </div>

        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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
          <div className="flex-col flex items-center text-center gap-3 justify-center ">
            <h1 className="font-bold text-4xl">About $BALL</h1>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet.
            </h2>
            <p>
              Firmamız 1993 yılında İzmir'de Sami Zeybek ve Vildan Zeybek
              tarafından OYAK Sigorta Acenteliği olarak kurulmuştur. Kurulduğu
              günden beri sektörün öncü şirketlerinin acenteliğini yapmıştır.
              Güncel olarak İzmir'de profesyonel olarak acenteliğe devam
              etmektedir.
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
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex-col flex items-center text-center gap-3 justify-center ">
            <h1 className="font-bold text-4xl">About $BALL</h1>
            <h2 className="font-bold text-2xl text-[#0251fc]">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet.
            </h2>
            <p>
              Firmamız 1993 yılında İzmir'de Sami Zeybek ve Vildan Zeybek
              tarafından OYAK Sigorta Acenteliği olarak kurulmuştur. Kurulduğu
              günden beri sektörün öncü şirketlerinin acenteliğini yapmıştır.
              Güncel olarak İzmir'de profesyonel olarak acenteliğe devam
              etmektedir.
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
          <img
            src="/about2.gif"
            className="rounded-lg w-[300px] lg:w-[600px] "
          ></img>
        </div>
      </section>
      <section className="home-programs container flex flex-col text-center gap-3">
        <h1 className="font-bold text-4xl">FAQ</h1>
        <h2 className="font-bold text-2xl text-[#0251fc]">
          Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
        </h2>
        <div className="">
          <Accordion
            flush
            open={open}
            toggle={toggle}
            className="font-bold text-md p-4 bg-[#242424] text-white "
          >
            <AccordionItem className="bg-[#242424] text-white">
              <AccordionHeader targetId="1" className="bg-[#242424] text-white">
                {" "}
                Strong Partnerships
              </AccordionHeader>
              <AccordionBody
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
      </section>
    </div>
  );
}
