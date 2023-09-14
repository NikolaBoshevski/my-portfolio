"use client";

import bootstrap from "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from "../Homepage/page";
import { NavBar } from "../components/nav";

export default function Nastani() {
  return (
    <main>
      <Homepage />
      <NavBar />
    </main>
  );
}
