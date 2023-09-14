import React from "react";
import Image from "next/image";
import students from "../Images/site-studenti.jpg";
import pattern from "../Images/green-dots.jpg";
import Link from "next/link";
export default function NastavaMain() {
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-8 offset-2">
            <h6 className="title-nastava ">
              Вкупниот годишен фонд на часови на гимназиско образование е
              следниот
            </h6>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className=" row px-5">
          <div className="col-3 d-flex flex-column ">
            <div className="button-lessons  text-center  ">
              <h2 className="py-3 font-weight-bolder  mb-0"> Во I година </h2>
              <p>33 (35) часа</p>
            </div>
          </div>
          <div className=" col-3 d-flex flex-column">
            <div className="button-lessons card-container text-center  ">
              <h2 className="py-3 font-weight-bolder  mb-0">Во II година</h2>
              <p>33 (35) часа</p>
            </div>
          </div>
          <div className=" col-3 d-flex flex-column">
            <Link href="/Nastava/Tretta" className="link-text">
            <div className="button-lessons card-container text-center  ">
              <h2 className="py-3 font-weight-bolder  mb-0">Во III година</h2>
              <p>33 (35) часа</p>
            </div></Link>
          </div>
          <div className=" col-3 d-flex flex-column">
            <div className="button-lessons card-container text-center  ">
              <h2 className="py-3 font-weight-bolder  mb-0">Во VI година</h2>
              <p>33 (35) часа</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col py-5 position-relative">
            <p className="p-4 border-color border-radius-40">
              Со наставниот план се утврдени компонентите кои се задолжителни за
              сите ученици и рамките во кои треба да се движат училиштата при
              утврдувањето на останатите компоненти на наставниот план. Тоа
              значи дека на училиштата (директорите, наставниците, учениците) им
              се дава извесна слобода во креирањето на изведбените наставни
              планови. Наставниот план е структуриран од четири
              организациско-содржински компоненти: задолжителни предмети,
              изборни предмети, задолжителни изборни програми и проектни
              активности. Тоа значи дека на училиштата (директорите,
              наставниците, учениците) им се дава извесна слобода во креирањето
              на изведбените наставни планови. Наставниот план е структуриран од
              четири организациско-содржински компоненти: задолжителни предмети,
              изборни предмети, задолжителни изборни програми и проектни
              активности.
            </p>
            <Image src={pattern} className="img-top" alt="img" />
            <Image src={pattern} className="img-bottom" alt="img" />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col mb-4">
            <Image src={students} alt="img" className="img-fluid rounded" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h6 className="title-font">Задолжителни предмети</h6>
            <p className="text-font">
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми, кој
              се уште не е променет.
            </p>
          </div>
          <div className="col-6">
            <h6 className="title-font">Изборни предмети</h6>
            <p className="text-font">
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
        <div className="row">
          <div className="col-6">
            <div
              className="accordion accordion-flush border rounded"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header accordion-white1">
                  <button
                    className="accordion-button collapsed accordion-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseRequired"
                    aria-expanded="false"
                    aria-controls="flush-collapseRequired"
                  >
                    Листа на изборни предмети
                  </button>
                </h2>
                <div
                  id="flush-collapseRequired"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="accordion accordion-flush border rounded"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header accordion-white1">
                  <button
                    className="accordion-button collapsed accordion-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseChoose"
                    aria-expanded="false"
                    aria-controls="flush-collapseChoose"
                  >
                    Листа на изборни предмети
                  </button>
                </h2>
                <div
                  id="flush-collapseChoose"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                      <li>Lorem ipsum</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
