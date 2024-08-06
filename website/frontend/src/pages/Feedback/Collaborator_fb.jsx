import React,{useEffect} from 'react'
import "./Collaborator_fb.css"
import { Backtotop,Underline } from '../../widgets'


const Collaborator_fb = () => {
    useEffect(()=>{
        document.title='ACGCET-Collaborator-Feedback';
    },[]);

  return (
    <div className='collab_fb_body'>
        <Underline heading = "Collaborator Feedback"></Underline>
        <form action="" className='collab_fb_form'>
            <div className="collab_fb_row">
            <input type="text" className="collab_fb_input" placeholder='Name of the project' required  />

            <input type="text" className="collab_fb_input" placeholder='Funding Agency' required  />
            </div>

            <div className="collab_fb_row">
                <input type="text" className='collab_fb_input' placeholder='Duration' required />

                <input type="text" className='collab_fb_input' placeholder='Principle Investigator' required /> 
            </div>

            <div className="collab_fb_row">

            <input type="text" className="collab_fb_input" placeholder='Name of the authority' required  />
            </div>




        </form>



    </div>
  )
}

export default Collaborator_fb
