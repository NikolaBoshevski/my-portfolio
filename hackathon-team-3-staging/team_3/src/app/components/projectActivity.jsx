import React from "react";
import Image from "next/image";
import students from "../Images/site-studenti.jpg";
import red from "../Images/red-dots.png";
import nastava from "../Images/kinez.jpg";
import green from "../Images/green-dots.jpg";

export default function ProjectActivity() {
  return (
    <>
      <div className="container py-5 ">
        <div className="row">
          <div className="col position-relative rounded mb-4">
            <Image src={students} alt="img" className="img-fluid rounded" />
            <Image src={red} className="img-top" alt="img" />
            <Image src={red} className="img-bottom" alt="img" />
          </div>
          <h6 className="title-font">Проектни активности</h6>
          <p className="comming-events-span m-0">
            Lorem Ipsum е едноставен модел на текст кој се користел во
            печатарската индустрија. Lorem ipsum бил индустриски стандард кој се
            користел како модел уште пред 1500 години, кога непознат печатар зел
            кутија со букви и ги сложил на таков начин за да направи примерок на
            книга. И не само што овој модел опстанал пет векови туку почнал да
            се користи и во електронските медиуми, кој се уште не е променет.{" "}
          </p>
        </div>
      </div>

      <div className="container-fluid pb-5 curved-div bg-primary-light-blue">
        <div className="container padding-100">
          <div className="row color-white">
            <h6 className="title-font">Дополнителна и додатна настава</h6>
            <p className="comming-events-span mb-5">
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми, кој
              се уште не е променет.
            </p>
            <p className="comming-events-span m-0">
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми, кој
              се уште не е променет.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5 my-5">
        <div className="row d-flex align-items-center">
          <div className="col-6 ">
            <h6 className="title-font">Екскурзии</h6>
            <p className="text-font">
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми, кој
              се уште не е променет.{" "}
            </p>
          </div>
          <div className="col-6 position-relative">
            <Image src={nastava} className="img-fluid" alt="img" />
            <Image src={green} className="img-top1 img-fluid" alt="img" />
            <Image src={red} className="img-bottom1 img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
