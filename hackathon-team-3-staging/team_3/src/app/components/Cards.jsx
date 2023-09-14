import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className="all4cards  row justify-content-center">
          <div className=" col-auto d-flex flex-column ">
            <div className="card card-box-shadow  text-center primary-dark-blue ">
              <h2 className="py-4 font-weight-bolder  mb-0"> 62 </h2>
              <p>ГОДИНИ</p>
            </div>
          </div>
          <div className=" col-auto d-flex flex-column">
            <div className="card card-container text-center primary-dark-blue ">
              <h2 className="py-3 font-weight-bolder  mb-0"> 120+ </h2>
              <p> ВРАБОТЕНИ</p>
            </div>
          </div>
          <div className=" col-auto d-flex flex-column">
            <div className="card card-container text-center primary-dark-blue ">
              <h2 className="py-3 font-weight-bolder  mb-0">1000+</h2>
              <p>УЧЕНИЦИ</p>
            </div>
          </div>
          <div className=" col-auto d-flex flex-column">
            <div className="card card-container text-center primary-dark-blue ">
              <h2 className="py-3 font-weight-bolder  mb-0">36</h2>
              <p> ПАРАЛЕЛКИ</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Cards

