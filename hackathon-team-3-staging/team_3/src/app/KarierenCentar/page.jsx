'use client'

import React from 'react'
import KCSection1 from '../components/KCSection1'
import KCSection2 from '../components/KCSection2'
import KCProektPacio from '../components/KCProektPacio'
import KCGalerija from '../components/KCGalerija'
import BannerZaNas from '../components/bannerZaNas'
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Homepage from "../Homepage/page"
import { NavBar } from "../components/nav";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from '../components/footer'

const KarierenCentarPage = () => {

  return (
    <>
    <Homepage/>
    <NavBar/>
    <BannerZaNas></BannerZaNas>
    <KCSection1></KCSection1>
    <KCSection2></KCSection2>
    <KCProektPacio></KCProektPacio>
    <KCGalerija></KCGalerija>
    <Footer/>
    
    </>
  )
}

export default KarierenCentarPage
