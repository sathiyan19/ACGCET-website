import React,{useEffect} from 'react'
import "./Rti.css"
import { Content_card,Underline } from '../../widgets'
import { rti_data } from '../../constants/rti'

const asr= "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Ece/faculties/teachingfac/ASR.webp"


const Rti = () => {
    useEffect(() => {
        document.title = 'ACCET-RTI';
    }, []);
    return (
        <>
        <div className='rti_content'>
            <Underline heading="RTI"/>
            <div className='rti_cards'>
              {rti_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
            </div>
        </div>
        <Underline heading="RTI Officer"/>
        <div className='rtiofficer'>
            <div className='rtiofficer_bg'>
                <img className='rtiofficer_img' src={asr} alt="Dr. A. Sivanantha Raja" />
                <div className='rtiofficer_des'>
                <p className="rtiofficer_name">Dr. A. Sivanantha Raja,</p>
                <p className="rtiofficer_designation">Professor,</p>
                <p className='rtiofficer_mail'>sivanantharaja@gmail.com</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Rti