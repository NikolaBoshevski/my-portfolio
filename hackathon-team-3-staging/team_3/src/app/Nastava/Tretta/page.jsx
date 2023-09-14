'use client';

import bootstrap from "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

import { NavBar } from "../../components/nav";
import Footer from "../../components/footer";
import NastavaMain from "../../components/nastavaMain";
import ProjectActivity from "../../components/projectActivity";
import AcordionSubjects from "../../components/acordionSubjects";
import Homepage from '../../Homepage/page'


export default function NastavaTretta() {
  return (
    <main>
      <Homepage/>
      <NavBar />
      
      <NastavaMain/>
      <AcordionSubjects/>
      <ProjectActivity/>
      <Footer/>
    </main>
  );
}