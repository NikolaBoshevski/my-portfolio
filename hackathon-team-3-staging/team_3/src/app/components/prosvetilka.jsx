import Image from "next/image";
import rezime from "../Images/rezime.png";
import ucenje from "../Images/ucenje.png";
import aktivnosti from "../Images/aktivnosti.png";
import karieren from "../Images/karieren.png";
import light from "../Images/light.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";
export const Prosvetilka = () => {

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();


  useEffect(() => {
  
  // const target = new Date("08/13/2023 23:59:59");
  function manipulateDate(inputDate) {
    let date;
    if (!inputDate) {
      date = new Date();
    } else {
      date = new Date(inputDate);
    }
  
    // Subtract 6 hours from the date
    date.setHours(date.getHours() - 6);
  
    return date;
  }
  
  const specificDate = manipulateDate("08/13/2023 22:29:59");
  
  const interval = setInterval(() => {
      const currentDateMinus6Hours = manipulateDate();
      // const now = new Date();
      const difference = specificDate.getTime() - currentDateMinus6Hours.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className=" position-relative">
        <div className="all4cards row">
          <div className=" col-3 d-flex flex-column">
            <div className="card text-center">
              <Image src={rezime} alt="slika" />
              <p className="pt-3 mb-0">Уписи</p>
            </div>
          </div>
          <div className=" col-3 d-flex flex-column">
            <div className="card text-center">
              <Image src={aktivnosti} alt="slika" />
              <p className="pt-3 mb-0">Активности</p>
            </div>
          </div>
          <div className=" col-3 d-flex flex-column ">
           <Link href="/Nastava" className="link-text"> 
           <div className="card text-center">
              <Image src={ucenje}  alt="slika"/>
              <p className="pt-3 mb-0">Настава</p>
            </div></Link>
          </div>
          <div className=" col-3 d-flex flex-column">
            <Link href="/KarierenCentar" className="link-text">
            <div className="card text-center">
              <Image src={karieren} alt="slika" />
              <p className="pt-3 mb-0">Кариерен Центар</p>
            </div></Link>
          </div>
        </div>
      </div>
      <div className="marginTop ">
        <div className="prosvetilka row text-white py-5 ">
          <div className="col-4 offset-1 pl-5">
            <h2 className="pb-3 ">Просветилка</h2>
            <div className="d-flex justify-content-between">
            <div><p>Денови:</p><h1>{ days}</h1></div>
            <div><p>Саати:</p><h1>{ hours}</h1></div>
            <div><p>Минути:</p><h1>{ minutes}</h1></div>
              <div><p>Секунди:</p><h1>{seconds}</h1></div>
              
            </div>
            <p></p>
            {/* <div>{ `Денови:${days} Саати ${hours} Минути ${minutes} Секунди${seconds}`}</div> */}
            <button className="btn mt-3 btnprosvetilka">Алумни</button>
          </div>
          <div className="col-5 position-relative" >
            <Image  src={light} className="light" alt="slika" />
          </div>
        </div>
      </div>
    </div>
  );
};
