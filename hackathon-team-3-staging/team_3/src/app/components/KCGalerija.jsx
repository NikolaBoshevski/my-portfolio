import React from 'react'
import Image from 'next/image'
import first from "../Images/firstImg.svg"
import second from "../Images/secondImg.svg"
import third from "../Images/thirdImg.svg"
import fourth from "../Images/fourthImg.svg"
import fifth from "../Images/FifthImg.svg"
import sixth from "../Images/SixthImg.svg"
import ButtonKC from '../Images/ButtonKC.svg'
const KCGalerija = () => {
  return (
  <div className='container pos-rel margin-top-kc'>
    
    <div className="row justify-content-around">
    <h3 className='font-weight-bolder text-center'>Галерија</h3>
      <div className="col-4">
      <Image src={first} alt='first' width={500}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}} ></Image>
      </div>
      <div className="col-4">
      <Image src={second} alt='second' width={500}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}} ></Image>
      </div> <div className="col-4">
      <Image src={third} alt='third' width={500}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}} ></Image>
      </div> <div className="col-4">
      <Image src={fourth} alt='fourth' width={500}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}} ></Image>
      </div> <div className="col-4">
      <Image src={fifth} alt='fifth' width={500}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}} ></Image>
      </div> <div className="col-4">
      <Image src={sixth} alt='sixth' width={500}
            height={200}
            style={{maxWidth: "100%",
            height:"auto"}} ></Image>
           
          </div>
          
          
    </div>
      <a href="https://www.instagram.com/karierencentar.rjk/" target='_blank'>
      <Image src={ButtonKC} alt='sixth' width={30}
            height={200}
            style={{minWidth: "20%",
            height:"auto"}} id='buttonKC'  ></Image>
      </a>

      {/* <div className="col-auto pos-rel">
   
      <button className='custom-button button-default-green' style={{width:"100%",padding:"3px, 40px, 3px, 40px"}}>Заследи нè 
      <Image src={btnInstagramIcon} alt='sixth' width={30}
            height={200}
            style={{maxWidth: "7%",
            height:"auto"}} id='btnInstagramIcon' ></Image></button> */}
          {/* <Image src={btnInstagramIcon} alt='sixth' width={30}
            height={200}
            style={{maxWidth: "3%",
            height:"auto"}} id='btnInstagramIcon' ></Image> */}
             {/* </div> */}
            
  </div>
  )
}

export default KCGalerija
