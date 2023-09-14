import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";

import nagrad1 from ".././Images/nagrad1.png";
import nagrad2 from ".././Images/nagrad2.png";
import nagrad3 from ".././Images/nagrad3.png";
import nagrad4 from ".././Images/nagrad4.png";
import filepdf from ".././Images/pdf-file.png";
import nagradagrupna from "../Images/site-studenti.jpg";
export const Nagradi = () => {
  return (
    <div className="container">
      <h1 className="text-center nagradenih1 pt-5 mt-5">Отворен ден</h1>
      <p className="pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure libero
        deleniti molestias repellendus a? Similique corrupti labore omnis ipsam
        doloremque!
      </p>
      <p>
        <Image src={filepdf} />| Document name
      </p>
      <h1 className="text-center nagradenih1 pt-5 pb-5 mt-5">
        Наградени и успешни ученици
      </h1>
      <div className="row">
        <div className="col-3">
          <Image src={nagrad1} className="rounded nagradiPic" />
          <h5 className="font-weight-bold pt-3">Име Презиме</h5>
          <p className="font-weight-bold">I Место</p>
          <p className="font-weight-bold">Натпревар по математика</p>
        </div>
        <div className="col-3">
          <Image src={nagrad2} className="rounded nagradiPic" />
          <h5 className="font-weight-bold pt-3">Име Презиме</h5>
          <p className="font-weight-bold">I Место</p>
          <p className="font-weight-bold">Натпревар по математика</p>
        </div>
        <div className="col-3">
          <Image src={nagrad3} className="rounded nagradiPic" />
          <h5 className="font-weight-bold pt-3">Име Презиме</h5>
          <p className="font-weight-bold">I Место</p>
          <p className="font-weight-bold">Натпревар по математика</p>
        </div>
        <div className="col-3">
          <Image src={nagrad4} className="rounded nagradiPic" />
          <h5 className="font-weight-bold pt-3">Име Презиме</h5>
          <p className="font-weight-bold">I Место</p>
          <p className="font-weight-bold">Натпревар по математика</p>
        </div>
      </div>
      <h1 className="text-center nagradenih1 pt-5 mt-5">
        Групни награди /пофалници
      </h1>
      <Image src={nagradagrupna} className="picgrupna my-5" />
      <p className="pt-1">II Место</p>
      <p className="pt-1 py-4">
        Награда/пофалница/благодарница за успешно засадени 100 дрва за Ден на
        Дрвото
      </p>
    </div>
  );
};
