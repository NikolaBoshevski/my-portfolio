import React from "react";
import NovostiBanner from "../Images/Novosti.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";

const BannerNovosti = () => {
  return (
    <div className=" w-100 bgc bannerNovostiContainer ">
        <Image
          src={NovostiBanner}
          className="bannerNovosti"
          alt="novostBanner"
        />
        <div className="bannerContent">
          <h1 className="h1bannernovosti">Настава</h1>
        </div>
    </div>
  );
};

export default BannerNovosti;
