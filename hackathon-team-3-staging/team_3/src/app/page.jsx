'use client'

import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from './Homepage/page'
import { NavBar } from './components/nav'
import { Banner } from './components/banner'
import { Prosvetilka } from './components/prosvetilka';
import Awards from './components/awards';

import CommingEvents from './components/commingEvents';
import Footer from './components/footer';
import Maps from './components/maps';
import Institutions from './components/institutions';
import OglasnaTabla from './components/oglasnaTabla';


export default function Home() {
  
  return (
    <main>
      <Homepage />
      <NavBar />
      <Banner />
      <Prosvetilka />
     <OglasnaTabla/>
     <CommingEvents/>
      <Awards />
      <Institutions/>
      <Maps/>
      <Footer/>

    </main>
  )
}
