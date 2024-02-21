import React from 'react'
import './Navcss.css'
import { GiPig } from "react-icons/gi";
import { PiPiggyBankFill } from "react-icons/pi";

function Navmain() {
  return (
    <div className="index fixed navbar bg-base-100">
        <a className="index text-white mx-auto btn btn-ghost text-xl"><PiPiggyBankFill /><PiPiggyBankFill /><PiPiggyBankFill />
</a>
    </div>
  )
}

export default Navmain