import React,{useEffect} from 'react'

import "./Iic.css"

import { Content_card,Underline } from '../../widgets'

import { iic,edc } from '../../constants/iic';


const Iic = () => {
  useEffect(() => {
    document.title = 'ACCET-IIC';
  }, []);
  return (
    <div className='iic_container'>

       <Underline heading="Innovation and Startup policies"/>

        <div className='iic_cards'>
            {iic.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>

        <Underline heading="EDC"/>

        <div className='iic_cards'>
            {edc.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>


    </div>
  )
}

export default Iic