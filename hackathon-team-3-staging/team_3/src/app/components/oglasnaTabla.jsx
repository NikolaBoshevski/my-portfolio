"use client"
import { useState,useEffect } from "react"
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.css'
import oglasnaTablaImg from "../../../public/oglasnaTablaImg.svg"
import pattern from "../../../public/pattern.svg"
import oglasnaTablaImg2 from "../../../public/oglasnaTablaImg2.svg"
import oglasnaTablaImg3 from "../../../public/oglasnaTablaImg3.svg"






const OglasnaTabla = () => {
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

    <div className='container my-5 '>
      <h2 className='text-center'>Огласна Табла</h2>
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-auto">
        <button
        className={`custom-button ${isNewsActive ? 'button-default-green ' : 'button-default-green-inactive color-green'}`}
        onClick={() => {
          setIsNewsActive(true);
          setIsActivitiesActive(false);
        }}
      >
        Новости
      </button>
        </div>
        <div className="col-auto">
        <button
        className={`custom-button ${isActivitiesActive ? 'button-default-green ' : 'button-default-green-inactive color-green'}`}
        onClick={() => {
          setIsNewsActive(false);
          setIsActivitiesActive(true);
        }}
      >
        Активности
        </button>
        </div>

      </div>

    <div className="row novosti-wrapper mt-5" >
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
        <Image src={pattern} alt="pattern" width={20}
            height={200}
            style={{maxWidth: "15%",
            height:"auto"}} id="pattern-bottom" ></Image>
             
      
        <div className="col-4 card-container p-4 ">

            <Image src={oglasnaTablaImg} alt="oglasna tabla img" 
            width={300}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}}
            className="mt-5"/>
            <h3>Наслов</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident explicabo qui nemo doloribus cum eum quia veniam deleniti esse necessitatibus?</p>
            <p className="float-r font-weight-bold">datum</p>

        </div>
        <div className="col-4 card-container p-4 ">

            <Image src={oglasnaTablaImg2} alt="oglasna tabla img" 
            width={300}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}}
            className="mt-5"/>
            <h3>Наслов</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident explicabo qui nemo doloribus cum eum quia veniam deleniti esse necessitatibus?</p>
            <p className="float-r font-weight-bold">datum</p>

        </div>
        <div className="col-4 card-container p-4 ">

            <Image src={oglasnaTablaImg3} alt="oglasna tabla img" 
            width={300}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}}
            className="mt-5"/>
            <h3>Наслов</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident explicabo qui nemo doloribus cum eum quia veniam deleniti esse necessitatibus?</p>
            <p className="float-r font-weight-bold">datum</p>

        </div>
        <Image src={pattern} alt="pattern" width={20}
            height={200}
            style={{maxWidth: "15%",
            height:"auto"}} id="pattern-top" ></Image>
    </div>
   
    </div>
  )
}



export default OglasnaTabla
