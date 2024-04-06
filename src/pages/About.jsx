import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
      <section className="base-ball container ">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <img
            src="/baseball-mlb.gif"
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
            src="/baseball-run.gif"
            className="rounded-lg w-[300px] lg:w-[600px] "
          ></img>
        </div>
      </section>
      <div className="container collection-text">
        <div className="pt-[100px]  ">
          <p className="text-sm leading-5 text-[#E74040] mb-3">
            Problems trying
          </p>

          <div className="flex md:flex-row flex-col justify-between gap-[80px]">
            <div className="flex basis-1/3">
              <h3 className="font-bold text-2xl leading-8 text-[#252B42]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>
            <div className="flex basis-2/3">
              <p className="text-secondaryColor text-sm leading-5 text-start">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" text-center py-5 ">
          <div className="flex md:flex-row flex-col gap-3 justify-between">
            <div className="flex-col">
              <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
                15K
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Happy Customers
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
                150K
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Monthly Visitors
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
                15
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Countries Worldwide
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
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
          <h2 className="text-[#252B42] font-bold text-[40px] leading-[40px]">
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
        </div>
      </div>
    </div>
  );
}
