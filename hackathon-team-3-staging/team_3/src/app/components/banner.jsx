import Image from "next/image";
import girlbanner from "../Images/girlbanner.png";
import thing1 from "../Images/bluecircles.png";
import thing2 from "../Images/ph_student.png";
import thing3 from "../Images/greenthings.png";
import people from "../Images/people.png";
import clock from "../Images/clock.png";
import airplane from "../Images/airplane.png";
import Link from "next/link";
export const Banner = () => {
  return (
    <div className="banner d-flex">
      <div className="container d-flex  ">
        <div className="row align-items-center position-relative">
        <div className="col-7">
          <h1 className="h1banner">
            БИДИ БРЕНД
            <br /> БИДИ <span className="spanbanner">КОРЧАГИН</span>
          </h1>
          <p className="pbanner p-3">
            Lorem Ipsum е едноставен модел на текст кој се користел во
            печатарската индустрија. Lorem ipsum бил индустриски стандард кој се
            користел како модел уште пред 1500 години.
          </p>
          <Link href="/ZaNas" className="link-text">
          <button className="btnbanner btn btn-lg px-5">За нас</button></Link>
        </div>
        <div className="col-5 align-items-center">
          <div className="bgimgbanner position-relative">
            <Image alt="picture" src={girlbanner} height={600} className="girlbanner" />
            <Image alt="picture" src={thing1} className="index2" />
            <Image alt="picture" src={thing1} className="index2" />
            <p className="rounded p1girlbanner px-4 text-white py-1 d-flex justify-content-between align-items-center py-2">
              <Image alt="picture" src={thing2} className="" />
              1000+ Ученици
            </p>
            <p className="rounded p2girlbanner px-4 text-white py-1 d-flex justify-content-between align-items-center py-2">
              <Image alt="picture" src={people} className="" />
              63+ Паралелки
            </p>
            <p className="rounded p3girlbanner px-4 text-white py-1 d-flex justify-content-between align-items-center py-2">
              <Image alt="picture" src={clock} className="" />
              60+ Години
            </p>
            <Image alt="picture" src={thing3} className="greenthing" />
            <p className="rounded p4girlbanner px-4 text-white py-1 d-flex justify-content-between align-items-center py-2">
              <Image alt="picture" src={airplane} className="" />
              3+ Еразмус проекти
            </p>
            <Image alt="picture" src={thing3} className="greenthing2" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
