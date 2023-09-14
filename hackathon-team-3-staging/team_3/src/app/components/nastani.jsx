"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import novosti1 from "../Images/novosti1.png";
import novosti2 from "../Images/novosti2.png";
import novosti3 from "../Images/novosti3.png";
import "bootstrap/dist/css/bootstrap.css";

export const NastaniCards = () => {
  const [isNewsActive, setIsNewsActive] = useState(true);
  const [isActivitiesActive, setIsActivitiesActive] = useState(false);

  //   const [cards,setCards] = useState([]);

  // useEffect(()=>{
  //     fetch(" http://localhost:3001/cards")
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then((data) =>{
  //       console.log(data);
  //       setCards(data);
  //     });
  //   },[]);

  return (
    <div className="container ">
      <div className="row novosti-header">
        <h3 className="nastani-headline">Настани</h3>
      </div>

      <div className="row novosti-wrapper mt-5">
        {/* {cards.map(card =>(
              <div className="col-4 card-container p-4 " key={card.id}>

              <Image src={card.img} alt="oglasna tabla img" 
              width={300}
              height={200}
              style={{maxWidth: "100%",
              height:"auto", zIndex:"2"}}
              className="mt-5"/>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p className="float-r font-weight-bold">{card.date}</p>
  
  
          </div>
        ))} */}

        <div className="col-4 p-4 ">
          <div className="card cardnastani">
            <Image
              src={novosti1}
              alt="oglasna tabla img"
              style={{ maxWidth: "100%", height: "auto" }}
              className="mt-5"
            />
            <h3>Наслов</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident explicabo qui nemo doloribus cum eum quia veniam
              deleniti esse necessitatibus?
            </p>
            <p className="float-r ">datum</p>
          </div>
        </div>
        <div className="col-4 p-4 ">
          <div className="card cardnastani">
            <Image
              src={novosti2}
              alt="oglasna tabla img"
              style={{ maxWidth: "100%", height: "auto" }}
              className="mt-5"
            />
            <h3>Наслов</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident explicabo qui nemo doloribus cum eum quia veniam
              deleniti esse necessitatibus?
            </p>
            <p className="float-r ">datum</p>
          </div>
        </div>
        <div className="col-4  p-4 ">
          <div className="card cardnastani">
            <Image
              src={novosti3}
              alt="oglasna tabla img"
              style={{ maxWidth: "100%", height: "auto" }}
              className="mt-5"
            />
            <h3>Наслов</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident explicabo qui nemo doloribus cum eum quia veniam
              deleniti esse necessitatibus?
            </p>
            <p className="float-right">datum</p>
          </div>
        </div>
      </div>
    </div>
  );
};
