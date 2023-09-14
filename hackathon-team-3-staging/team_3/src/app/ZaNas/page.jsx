'use client'

import React from 'react'
import ZaNasRade from '../components/ZaNasRade'
import ZaNasMain from "../components/ZaNasMain"
import Cards from "../components/Cards"
import BannerZaNas from "../components/bannerZaNas"
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import vizija from "../Images/vizija.svg"
import misija from "../Images/misija.svg"
import Homepage from '../Homepage/page'
import { NavBar } from "../components/nav";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from '../components/footer'
import NashiteCeli from '../components/NasiteCeli'

const ZaNas = () => {
  return (
    <>
    <Homepage/>
    <NavBar/>
    <BannerZaNas></BannerZaNas>
    <Cards></Cards>
    <div className="text-center">
    <ZaNasMain
        title={"СУГС Раде Јовчевски - Корчагин"}
        content={"Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет"}
        img={misija}
      />
      <ZaNasMain
        title={"Нашата Мисија"}
        content={"Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет"}
        img={vizija}
      />
      <ZaNasMain
        title={"Нашата визија"}
        content={"Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет"}
      />
      </div>
      <NashiteCeli/>
    <ZaNasRade></ZaNasRade>
    <Footer/>
    </>
  )
}

export default ZaNas
