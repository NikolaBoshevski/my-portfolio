import Link from "next/link";
import React from "react";
import Image from "next/image";
import mon from '../Images/RSM.png'
import dic from '../Images/DIC.jpg'
import brazvoj from '../Images/mon.png'
import zlp from '../Images/DZ.jpg'
import ednevnik from '../Images/dnevnik.png'


export default function Institutions() {
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-2 px-1">
          <Link href={"https://mon.gov.mk/"} target="_blank">
            <Image src={mon} className="img-fluid"  alt="mon"/>
          </Link>
        </div>
        <div className="col-2 px-1">
          <Link href={"https://dic.edu.mk/"} target="_blank">
            <Image src={dic} className="img-fluid"  alt="mon" />
          </Link>
        </div>
        <div className="col-2 px-1">
          <Link href={"https://www.bro.gov.mk/"} target="_blank">
            <Image src={brazvoj} className="img-fluid"  alt="mon" />
          </Link>
        </div>
        <div className="col-2 px-1">
          <Link href={"https://azlp.mk/"} target="_blank">
            <Image src={zlp} className="img-fluid"  alt="mon"/>
          </Link>
        </div>
        <div className="col-2 px-1">
          <Link href={"#"}>
            <Image src={ednevnik} className="img-fluid"   alt="mon"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
