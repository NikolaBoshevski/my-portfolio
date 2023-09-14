import React from "react";
import nastan from '../Images/nastani.jpg'
import Image from "next/image";

export default function CommingEvents() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-6 padding">
            <div className="image-container">
              <Image src={nastan} width='748px' height='600px' alt="nastan" className="img-fluid" />
              <div className="overlay-text">
                <p className="m-0 comming-events-description primary-baby-blue ">
                  Дескрипција за настанот
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 d-flex flex-column h-100">
            <p className="event-title">Престојни настани</p>
            <div className="row bg-primary-light-blue border-20 d-flex align-items-center mb-3">
              <div className="col-lg-3 py-3 ">
                <p className="m-0 bg-primary-baby-blue border-10 comming-events-date">
                  06 март
                </p>
              </div>
              <div className="col-lg-8 ">
                <p className="m-0 comming-events-text primary-baby-blue ">
                  Име на настанот
                </p>
                <p className="m-0 comming-events-span primary-baby-blue">
                  <span className="me-2">18:00ч</span>
                  <span className="me-2">06.03.2023</span>
                  <span>Локација</span>
                </p>
              </div>
            </div>
            <div className="row bg-primary-light-blue border-20 d-flex align-items-center mb-3">
              <div className="col-lg-3 py-3">
                <p className="m-0 bg-primary-baby-blue border-10 comming-events-date ">
                  06 март
                </p>
              </div>
              <div className="col-lg-8 ">
                <p className="m-0 comming-events-text primary-baby-blue ">
                  Име на настанот
                </p>
                <p className="m-0 comming-events-span primary-baby-blue">
                  <span className="me-2">18:00ч</span>
                  <span className="me-2">06.03.2023</span>
                  <span>Локација</span>
                </p>
              </div>
            </div>
            <div className="row bg-primary-light-blue border-20 d-flex align-items-center">
              <div className="col-lg-3 py-3 ">
                <p className="m-0 bg-primary-baby-blue border-10 comming-events-date">
                  06 март
                </p>
              </div>
              <div className="col-lg-8 ">
                <p className="m-0 comming-events-text primary-baby-blue ">
                  Име на настанот
                </p>
                <p className="m-0 comming-events-span primary-baby-blue">
                  <span className="me-2">18:00ч</span>
                  <span className="me-2">06.03.2023</span>
                  <span>Локација</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
