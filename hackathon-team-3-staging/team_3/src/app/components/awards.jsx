import React from "react";
import { Carousel } from "react-bootstrap";
import priznanija from "../Images/priznanija.jpg"
import krugce from "../Images/krugce.png";
import Image from "next/image";


export default function Awards() {
  return (
    <>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e2f5fb"
           fillOpacity="1"
            d="M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container-fluid carousel-bg pb-5">
        <div className="container text-center pb-5">
          <h3>Награди и признанија</h3>
        </div>
        <div className="container carousel-container rounded position-relative">
          <Carousel className="py-5">
            <Carousel.Item>
              <div className="row">
                <div className="col-6 px-5 text-white">
                  <h1 className="fontexo font-weight-bold">Марија Стојковска</h1>
                  <h4 className="fontexo pb-4">-1-во место на државен натпревар по математика-</h4>

                  <p className="pCarousel fontexo ">
                  Се чувствував исполнето со самодоверба за време на натпреварот. Го искористив целото мое математичко знаење и вештини за да ги решам прашањата што ми беа поставени. Беше неверојатно да ги видам сите години на учесниците и колку талентирани и предани луѓе има.Прашањата беа многу предизвикувачки, но истовремено и интересни. Беше потребно да се замислам длабоко и да применувам напредни математички концепти и техники за да ги решам.
                  </p>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-start">
                  <Image src={priznanija}width={560} className=" picCarousel" alt="slika" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-6 px-5 text-white">
                  <h1 className="fontexo font-weight-bold">Марија Стојковска</h1>
                  <h4 className="fontexo pb-4">-1-во место на државен натпревар по математика-</h4>
                  <p className="pCarousel fontexo">
                  Се чувствував исполнето со самодоверба за време на натпреварот. Го искористив целото мое математичко знаење и вештини за да ги решам прашањата што ми беа поставени. Беше неверојатно да ги видам сите години на учесниците и колку талентирани и предани луѓе има.Прашањата беа многу предизвикувачки, но истовремено и интересни. Беше потребно да се замислам длабоко и да применувам напредни математички концепти и техники за да ги решам.
                  </p>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-start">
                  <Image src={priznanija}width={560} className=" picCarousel" alt="slika" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-6 px-5 text-white">
                  <h1 className="fontexo font-weight-bold">Марија Стојковска</h1>
                  <h4 className="fontexo pb-4">-1-во место на државен натпревар по математика-</h4>
                  <p className="pCarousel fontexo">
                  Се чувствував исполнето со самодоверба за време на натпреварот. Го искористив целото мое математичко знаење и вештини за да ги решам прашањата што ми беа поставени. Беше неверојатно да ги видам сите години на учесниците и колку талентирани и предани луѓе има.Прашањата беа многу предизвикувачки, но истовремено и интересни. Беше потребно да се замислам длабоко и да применувам напредни математички концепти и техники за да ги решам.
                  </p>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-start">
                  <Image src={priznanija}width={560} className=" picCarousel" alt="slika" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
      <Image src={krugce} className="circleItem" alt="slika" />
        </div>
      </div> 
    </>
  );
}
