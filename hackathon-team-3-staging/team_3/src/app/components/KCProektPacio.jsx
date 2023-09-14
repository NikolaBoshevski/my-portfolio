import Image from 'next/image'
import React from 'react'
import VidiPovekjeBtn from './VidiPovekje'
import bench1 from "../Images/bench1.svg"
import bench2 from "../Images/bench2.svg"
import clockArrow from "../Images/clockArrow.svg"
import dottedSquare from "../Images/dottedSquare.svg"


const KCProektPacio = () => {
  return (
    <div className='container margin-top-kc '>
      <div className="row justify-content-center ">
        <div className="col-6">
            <h4 className='font-weight-bolder mb-5'>Проект Пацио 2.0</h4>
            <p className='mb-5'>Почетокот на овој проект започна со бојадисување на старите клупи од страна на Кариерците со цел да се оживее изгледот на Пациото. Иако овој процес сѐ уште трае, голем број на клупи веќе добија нови интересни и уникатни дизајни.</p>
            <VidiPovekjeBtn content = {"ВИДИ ПОВЕЌЕ"}></VidiPovekjeBtn>
        </div>
        <div className="col-6 position-relative">
        <Image src={bench1} alt='bench1' width={500}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}} ></Image>
            <Image src={bench2} alt='bench1' width={500}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}} id='bench2' ></Image>
             <Image src={clockArrow} alt='bench1' width={40}
            height={5}
            style={{maxWidth: "100%",
            height:"auto"}} id='clockArrow'></Image>
              <Image src={dottedSquare} alt='dottedSquare' width={8}
            height={5}
            style={{minWidth: "80%",
            height:"auto"}} id='dottedSquare'></Image>
        </div>
      </div>
    </div>
  )
}

export default KCProektPacio
