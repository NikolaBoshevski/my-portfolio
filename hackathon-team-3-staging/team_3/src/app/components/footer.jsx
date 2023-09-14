import Link from "next/link";
import React from "react";
import logoto from "../Images/logoto.png";
import Image from "next/image";
import strelka from "../Images/strelka.png";
import instagram from "../Images/insta.png";
import facebook from "../Images/fb.png";
import you from "../Images/you.png";

export default function Footer() {
  return (
    <>
      <div className="container-fluid py-5 footer-bg font-family-roboto">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-2  d-flex justify-content-center align-items-center">
              <Image src={logoto} alt="logo" />
            </div>
            <div className="col-lg-3 ">
              <h4 className="section-title  mb-4">За нас</h4>
              <p className="line-height">
                Ние сме училиште со традиција, отворено за нови идеи кои
                поттикнуваат индивидуалност и креативност, дисциплина и култура,
                повисоки интелектуални способности и образование кое ќе одговори
                на животните предизвици.
              </p>
            </div>
            <div className="col-lg-3 ">
              <h4 className="section-title  mb-4 ">Контакт </h4>
              <p className="m-0 line-height">
                ул. „Трета Македонска Ударна Бригада“ број 9, Скопје 1000
              </p>
              <p className="m-0 line-height">7:30-1:30ч., пон-пет</p>
              <p className="m-0 line-height">(02)31115-116</p>
            </div>
            <div className="col-lg-3 ">
              <h4 className="section-title  mb-4">Корисни линкови </h4>

              <ul className="footer-ul">
                <li className="footer-li">
                  <Link href="">Schools.mk</Link>
                </li>
                <li className="footer-li">
                  <Link href="">Е-дневник</Link>
                </li>
                <li className="footer-li">
                  <Link href="">Државна матура</Link>
                </li>
                <li className="footer-li">
                  <Link href="">Биро за развој на образованието</Link>
                </li>
                <li className="footer-li">
                  <Link href="">министерство за образование и наука</Link>
                </li>
                <li className="footer-li">
                  <Link href="">Државен испитен центар</Link>
                </li>
                <li className="footer-li">
                  <Link href="">Агенција за заштита на личните податоци</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-1">
              <Link href={"#header"} className="a-link arrow-up">
                <Image
                  src={strelka}
                  alt="instagram"
                  className="arrow-up a-link"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-rules text-white py-3 font-family-roboto">
        <div className="container bg-rules text-center">
          <div className="d-flex ">
            <p className="m-0">
              2023 СУГС „Раде Јовчески - Корчагин“. Сите права се задржани. |
              Developed with love by Brainster students!
            </p>
            <Link href="">
              <Image src={instagram} alt="instagram" className="f-15" />
            </Link>
            <Link href="">
              <Image src={facebook} alt="facebook" className="f-15" />
            </Link>
            <Link href="">
              <Image src={you} alt="youtube" className="f-15" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
