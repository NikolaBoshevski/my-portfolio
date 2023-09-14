import Image from 'next/image'
import React from 'react'
import trofej from "../Images/KCProsvetilka.svg"
import highFive from "../Images/high-five 1.svg"
import VidiPovekjeBtn from "./VidiPovekje"
const KCSection2 = () => {
  return (
    <div className='bg-primary-light-blue wave-background margin-top-kc'>
        <div className="container  padding-block-kc">
            <div className="row justify-content-center align-items-center">
            <Image src={highFive} alt='highFive' width={30} height={300} style={{maxWidth:"15%", height:"auto"} } id='highFive'></Image>
                <div className="col-6">
            <Image src={trofej} alt='trofej' width={500} height={300} style={{minWidth:"30%", height:"auto"} } id='trofej'></Image>
                </div>
                <div className="col-6 text-white">
                    <h4 className='font-weight-bolder'>10-ТА КОРЧАГИНСКА ПРОСВЕТИЛКА</h4>
                    <p className='text-white' >Оваа јубилејна просветилка ќе се одржи во Национална опера и балет на 23.03.2023 (четврток) со почеток од 19:00 часот. Картите можете да ги набавите во рамките на нашето училиште (од 11:00-15:00 секој ден)</p>
                    <p className='text-white'>Цената на картата изнесува 200 денари. Дел од заработените средства ќе одат за нашиот драг, поранешен соученик Марко.</p>

                        <a href="http://rjk.edu.mk/alumni/index.html" target='_blank'>
                   <VidiPovekjeBtn content={"ВИДИ ПОВЕЌЕ"}></VidiPovekjeBtn>
                    </a>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default KCSection2
