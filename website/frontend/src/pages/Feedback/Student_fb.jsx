import React from 'react'
import'./Student_fb.css'
import { Underline ,Content_card} from '../../widgets'
import{student_fb_card}from'../../constants/feedbackQuestions'


const Student_fb = () => {
  return (
    <div>
    <div className="student_fb_area">
        <Underline heading="Student Feedback"/>
    </div>

    <div className="stdudent_fb_card_holder">
       {student_fb_card.map((item)=><Content_card key={item.id} heading={item.program} view={item.pdf}/>)}


    </div>


    </div>
  )
}

export default Student_fb
