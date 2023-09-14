import React from "react";
import Link from "next/link";
import kadarimg from "../Images/kadarimg.jpg";
import Image from "next/image";

export default function Teachers() {
  return (
    <div className="container py-5 my-5">
      <div className="row d-flex align-items-center">
        <div className="col-6 position-relative">
          <Image
            src={kadarimg}
            width="600px"
            height="400px"
            alt="nastan"
            className="img-fluid p-5"
          />
        </div>
        <div className="col-6 ">
          <small>директор</small>
          <h6 className="title-font">М-р Елена Стојанова-Димитров</h6>
          <small>direktor@schools.mk</small>
          <p className="text-font">
            Lorem Ipsum е едноставен модел на текст кој се користел во
            печатарската индустрија. Lorem ipsum бил индустриски стандард кој се
            користел како модел уште пред 1500 години, кога непознат печатар зел
            кутија со букви и ги сложил на таков начин за да направи примерок на
            книга. И не само што овој модел опстанал пет векови туку почнал да
            се користи и во електронските медиуми, кој се уште не е променет.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <h6 className="title-font">Раководен кадар</h6>
        </div>
      </div>
      <div className="row border-bottom">
        <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0 title-font">Име и презиме</p>
          <small className="m-0">direktor@schools.mk</small>
        </div>

        <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0 title-font">Име и презиме</p>
          <small className="m-0">direktor@schools.mk</small>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0 title-font">Име и презиме</p>
          <small className="m-0">direktor@schools.mk</small>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0 title-font">Име и презиме</p>
          <small className="m-0">direktor@schools.mk</small>
        </div>
      </div>

      <div className="py-5 d-flex justify-content-center flex-wrap">
        <button className="btn-subject mb-3 me-4">Математика</button>

        <button className="btn-subject mb-3 me-4 ">Историја</button>

        <button className="btn-subject mb-3 me-4 ">Македонски јазик</button>

        <button className="btn-subject mb-3 me-4 ">Биологија</button>

        <button className="btn-subject mb-3 me-4 ">Хемија</button>

        <button className="btn-subject mb-3 me-4 ">Физика</button>

        <button className="btn-subject mb-3 me-4 ">Физика</button>

        <button className="btn-subject mb-3 me-4 ">Географија</button>

        <button className="btn-subject mb-3 me-4">Математика</button>

        <button className="btn-subject mb-3 me-4 ">Историја</button>

        <button className="btn-subject mb-3 me-4 ">Македонски јазик</button>

        <button className="btn-subject mb-3 me-4 ">Биологија</button>

        <button className="btn-subject mb-3 me-4 ">Хемија</button>

        <button className="btn-subject mb-3 me-4 ">Физика</button>

        <button className="btn-subject mb-3 me-4 ">Географија</button>

        <button className="btn-subject mb-3 me-4">Математика</button>

        <button className="btn-subject mb-3 me-4 ">Историја</button>

        <button className="btn-subject mb-3 me-4 ">Македонски јазик</button>

        <button className="btn-subject mb-3 me-4 ">Биологија</button>

        <button className="btn-subject mb-3 me-4 ">Хемија</button>

        <button className="btn-subject mb-3 me-4 ">Физика</button>

        <button className="btn-subject mb-3 me-4 ">Географија</button>

        <button className="btn-subject mb-3 me-4">Математика</button>

        <button className="btn-subject mb-3 me-4 ">Историја</button>

        <button className="btn-subject mb-3 me-4 ">Македонски јазик</button>
      </div>

      <div className="row ">
        <div className="col text-center">
          <h6 className="title-font">Образовен кадар</h6>
        </div>
      </div>
      <div className="row border-bottom">
        <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0 title-font">Име и презиме</p>
          <small className="m-0">direktor@schools.mk</small>
        </div>

        <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0 title-font">Име и презиме</p>
          <small className="m-0">direktor@schools.mk</small>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0 title-font">Име и презиме</p>
          <small className="m-0">direktor@schools.mk</small>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0 title-font">Име и презиме</p>
          <small className="m-0">direktor@schools.mk</small>
        </div>
      </div>
    </div>
  );
}
