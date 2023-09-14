"use client";

import bootstrap from "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from "../Homepage/page";
import { NavBar } from "../components/nav";
import Footer from "../components/footer";
import NastavaMain from "../components/nastavaMain";
import ProjectActivity from "../components/projectActivity";
import BannerZaNas from "../components/bannerZaNas";
import NastavenKadar from "../components/nastavenkadar";

export default function Nastava() {
  return (
    <main>
      <Homepage />
      <NavBar />
      <BannerZaNas />
      <NastavenKadar />
      <ProjectActivity />
      <Footer />
    </main>
  );
}
