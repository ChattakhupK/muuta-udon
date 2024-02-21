import React from 'react'
import { GiPig } from "react-icons/gi";
import { PiPiggyBankFill } from "react-icons/pi";

function Hero() {
  return (
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://static.trueplookpanya.com/tppy/member/m_557500_560000/559338/cms/images/mag1/BuffetLover%2001.gif)'}}>
    <div className="hero-overlay bg-opacity-40"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-white">MUUTA</h1>
        <p className="mb-5 text-white">ร้านหมูทะเปิดใหม่ ราคาถูก ของอร่อย อยากให้ลอง บริการครบ ที่นั่งสบาย รับรองว่าคุ้มค่าแน่นอน</p>
        <a target='_blank' href='https://www.google.com/maps/place/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/@17.4068656,102.7977336,15z/data=!4m6!3m5!1s0x3123775e83b74385:0x36c2ca421f2b0138!8m2!3d17.4294081!4d102.989615!16zL20vMDFkemRn?entry=ttu'><button className="btn glass"><a className="text-white"><GiPig /></a>พร้อมทาน!</button></a>
      </div>
    </div>
  </div>
  )
}

export default Hero