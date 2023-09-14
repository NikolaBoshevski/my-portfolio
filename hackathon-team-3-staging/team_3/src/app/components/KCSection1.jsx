import React from 'react'
import Image from 'next/image'
import lamba from "../Images/karierenCentarLamba.svg"
import facebookIcon from "../Images/facebookIcon.svg"
import instagramIcon from "../Images/instagramIcon.svg"
import upArrow from "../Images/up-arrow 1.svg"
import checkUsOut from "../Images/check us out.svg"
import infinity from "../Images/infinity.svg"
const KCSection1 = () => {
  return (
    <div>
       <div className="container mg-top-kc" >
        <div className="row justify-content-center " style={{marginTop:"-10%"}}>
            <div className="col-5" style={{marginTop:"-14%"}}>
                <Image src={lamba} alt='' width={900}
            height={500}
            style={{maxWidth: "100%",
            height:"`100%`",}} ></Image>
            </div>
            <div className="col-5">
                <h2 className='font-weight-bolder'>Кариерен Центар РЈК</h2>
                <p>Од свирки во Пацио, преку целодневни настани како „Уметникум“ и еко акции, па се до организација и креативно осмислување на манифестацијата „Просветилка“.</p>
                <div className="icons-container ">
                <Image src={instagramIcon} alt='' width={45}
            height={45}
            style={{maxWidth: "100%",
            height:"100%",
            marginRight:"20px"}}  ></Image>
                <Image src={facebookIcon} alt='' width={45}
            height={45}
            style={{maxWidth: "100%",
            height:"100%"}} ></Image>
             <Image src={upArrow} alt='' width={45}
            height={45}
            style={{maxWidth: "100%",
            height:"100%"}} id='upArrow' ></Image>
             <Image src={checkUsOut} alt='' width={160}
            height={160}
            style={{maxWidth: "100%",
            height:"100%"}} id='checkUsOut' ></Image>
          
                </div>
               
            </div>
        </div>
        <div className="karieren-centar-cards container ">
            <div className="row primary-dark-blue">
                <div className="col-3">
                    <div className="karieren-centar-card text-center">
                        <h3 className='karieren-font-size'>10</h3>
                        <h4 className='border-bot pb-3'>ПРОСВЕТИЛКИ</h4>
                    </div>
                </div>
                <div className="col-3">
                    <div className="karieren-centar-card text-center">
                        <h3 className='karieren-font-size'>4</h3>
                        <h4 className='border-bot pb-3'>УМЕТНИКУМИ</h4>
                    </div>
                </div>
                <div className="col-3">
                    <div className="karieren-centar-card text-center">
                        <Image src={infinity} alt='/'width={113}
            height={160}
            style={{maxWidth: "100%",
            height:"100%"}} ></Image>
                        <h4 className='border-bot pb-3'>СВИРКИ</h4>
                    </div>
                </div>
                <div className="col-3">
                    <div className="karieren-centar-card text-center">
                        <h3 className='karieren-font-size'>23</h3>
                        <h4 className='border-bot pb-3'>ФИЛМСКИ ВЕЧЕРИ</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default KCSection1
