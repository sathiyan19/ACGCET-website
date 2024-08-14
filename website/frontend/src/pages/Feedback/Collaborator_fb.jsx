import React, { useEffect, useState } from 'react';
import "./Collaborator_fb.css";
import { Backtotop, Underline } from '../../widgets';
import { collaboratorFeedbackQustions } from '../../constants/feedbackQuestions';

const Collaborator_fb = () => {
    // State to manage selected ratings
    const [ratings, setRatings] = useState({});

    useEffect(() => {
        document.title = 'ACGCET-Collaborator-Feedback';
    }, []);

    // Handle change for radio buttons
    const handleRatingChange = (name, value) => {
        setRatings({
            ...ratings,
            [name]: value
        });
    };

    return (
        <div className='collab_fb_body'>
            <Underline heading="Collaborator Feedback"></Underline>
            <form action="" className='collab_fb_form'>
                <div className="collab_fb_row">
                    <input type="text" className="collab_fb_input" placeholder='Name of the project' required />

                    <input type="text" className="collab_fb_input" placeholder='Funding Agency' required />
                </div>

                <div className="collab_fb_row">
                    <input type="text" className='collab_fb_input' placeholder='Duration' required />

                    <input type="text" className='collab_fb_input' placeholder='Principal Investigator' required />
                </div>

                <div className="collab_fb_row">
                    <input type="text" className="collab_fb_input_lgrow" placeholder='Name of the authority' required />
                </div>

                <div className="collab_fb_rating">
                    5 - Very Good
                    4 - Good
                    3 - Fair
                    2 - Poor
                    1 - Very Poor
                </div>

                <div className="collab_fb_subheading">
                    <p>Please give your valuable feedback on a scale of 1 to 5</p>
                </div>

                <div className="collab_fb_map">
                    {collaboratorFeedbackQustions.map(({ question, translation, name }) => (
                        <div className="collab_fb_question" key={name}>
                            <p>{question}</p>
                            <p>({translation})</p>
                            <div className="collab_fb_radio">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <label key={value}>
                                        <input
                                            type="radio"
                                            name={name}
                                            value={value}
                                            checked={ratings[name] === value.toString()}
                                            onChange={(e) => handleRatingChange(name, e.target.value)}
                                            required
                                        />
                                        {value}
                                    </label>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>

                <div className="collab_fb_row">
                    <button type='summit' className='collab_fb_summit'> 
                        Submit
                    </button>
                </div>
                
            </form>
            <Backtotop />
        </div>
    );
};

export default Collaborator_fb;
