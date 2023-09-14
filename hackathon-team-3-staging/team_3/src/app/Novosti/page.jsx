"use client";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "../components/nav";
import BannerNovosti from "../components/BannerNovosti";
import SoopstenijaCards from "../components/soopstenija";
import Dokumenti from "../components/dokumenti"
import {NastaniCards} from "../components/nastani"
import {Nagradi} from "../components/nagradi"
import Footer from "../components/footer";
export default function Novosti() {
  let soopstenijaData = [
    {
      id: 1,
      title:
        "Наслов - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "06.12.2023 | Соопштенија",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lobortis neque, vitae imperdiet purus. Vestibulum in malesuada lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      id: 2,
      title:
        "Наслов - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "06.12.2023 | Соопштенија",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lobortis neque, vitae imperdiet purus. Vestibulum in malesuada lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      id: 3,
      title:
        "Наслов - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "06.12.2023 | Соопштенија",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lobortis neque, vitae imperdiet purus. Vestibulum in malesuada lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      id: 4,
      title:
        "Наслов - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "06.12.2023 | Соопштенија",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lobortis neque, vitae imperdiet purus. Vestibulum in malesuada lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      id: 5,
      title:
        "Наслов - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "06.12.2023 | Соопштенија",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lobortis neque, vitae imperdiet purus. Vestibulum in malesuada lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      id: 6,
      title:
        "Наслов - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "06.12.2023 | Соопштенија",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lobortis neque, vitae imperdiet purus. Vestibulum in malesuada lectus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
  ];
  return (
    <main>
      <NavBar />
      <BannerNovosti />
      <SoopstenijaCards data={ soopstenijaData }/>
      <Dokumenti/>
      <NastaniCards/>
      <Nagradi/>
      <Footer/>
    </main>
  );
}
