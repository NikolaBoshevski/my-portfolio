import React from 'react'
import pattern from "../Images/pattern.svg"
import Image from 'next/image'

const NashiteCeli = () => {
  return (
    <div>
      <h2 className='text-center'>Нашите цели</h2>
      <div className="section-padding row justify-content-center align-items-center mt-5 cards-gap celi-cards-container">
        <div className="col-5 celi-container  ">
            <h3>Општи цели</h3>
            <p className=''>Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми</p>
            <Image src={pattern} alt="pattern" width={100}
            height={100}
            style={{maxWidth: "15%",
            height:"auto"}} id="celi-pattern-top" ></Image>
        </div>
        <div className="col-5 celi-container ">
            <h3>Посебни цели</h3>
            <p className=''>Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми</p>
            <Image src={pattern} alt="pattern" width={100}
            height={100}
            style={{maxWidth: "15%",
            height:"auto"}} id="celi-pattern-bottom" ></Image>
        </div>
       
      </div>
      
    </div>
  )
}

export default NashiteCeli
