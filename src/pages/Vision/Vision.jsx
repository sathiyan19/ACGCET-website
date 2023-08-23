import React from 'react'
import {useEffect} from 'react'

import './Vision.css'

import integrity from '../../assets/pictures/integrity.webp'
import ethics from '../../assets/pictures/ethics.webp'
import respect from '../../assets/pictures/aaaa.png'
import responsibility from '../../assets/pictures/responsibility.webp'
import trust from '../../assets/pictures/trust.webp'
import diversity from '../../assets/pictures/diversity.webp'
import ie from '../../assets/pictures/ie.webp'
import teamwork from '../../assets/pictures/teamwork.webp'

const Vision = () => {

  useEffect(() => {
    const rows = document.querySelectorAll('.row');

    function setEqualHeight() {
      rows.forEach(row => {
        const cards = row.querySelectorAll('.card');
        let maxCardHeight = 0;
        
        // Wait for images to load
        const imagePromises = Array.from(cards).map(card => {
          const image = card.querySelector('img');
          return new Promise(resolve => {
            if (image.complete) {
              resolve();
            } else {
              image.onload = resolve;
            }
          });
        });
    
        // Calculate maximum card height after images load
        Promise.all(imagePromises).then(() => {
          cards.forEach(card => {
            card.style.height = 'auto';
            const cardHeight = card.offsetHeight;
            if (cardHeight > maxCardHeight) {
              maxCardHeight = cardHeight;
            }
          });
    
          cards.forEach(card => {
            card.style.height = `${maxCardHeight}px`;
          });
        });
      });
    }
    

    setEqualHeight(); // Call the function initially
    window.addEventListener('resize', setEqualHeight); // Recalculate heights on window resize

    return () => {
      window.removeEventListener('resize', setEqualHeight); // Clean up event listener
    };
  }, []); 


  return (

    <div className="main">
        {/* vision section */}
        <div className="sub-division">
            <h2>Vision:</h2>
            <p>Our Commitment as a Centre of Engineering Education is to impart Technical Knowledge par excellence,
                 motivate the learners in Research, evolve result oriented, innovative techniques in Engineering, provide necessary career guidance, and train our
                 learners in leadership qualities so as to achieve better productivity and prosperity for our country.</p>
        </div>

        {/* mission section */}
        <div className="sub-division">
            <h2>Mission:</h2>
            <ul>
                <li>Constantly updating the departmental resources...</li>
                <li>Imparting constant in–service training to the faculty and supporting staff.</li>
                <li>Imparting constant in–service training to the faculty and supporting staff.</li>
                <li>Motivating the students to excel and augmenting their knowledge through continuing education programs.</li>
                <li>Providing soft skill development learning to students.</li>
                <li>Inculcating the feeling of oneness responsibility and service to community in the minds of students to serve the society better</li>
                <li>Carrying out purposeful research.</li>
            </ul>
        </div>

        <div className="sub-division">
            <h2>Core Values:</h2>
            <div className="row">

                <div className="column">
                    <div className="card">
                        <img src={integrity} alt="integrity" />
                        <h3>Integrity</h3>
                        <p>ACGCET is committed to ethical and responsible behavior in our own actions and to developing the
                        same commitment in our students, thus fostering individuals
                        who will have the skills, knowledge, and ability to engage positively with a diverse and 
                        changing world. ACGCET’s commitment extends to all levels of our campus to nurture a 
                        climate of ethical conduct, respect, responsibility, and trust.</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                      <img src={ethics} alt="ethics"/>
                      <h3>Ethics</h3>
                      <p>
                        ACGCET believes in working with honesty, courage, and trustworthiness.
                        At our college, ethics are ingrained in every aspect of our educational journey, shaping 
                        students into responsible and principled individuals.We believe in promoting a culture of ethics, 
                        where students learn to make ethical choices, embrace diversity, and act with empathy towards others.
                      </p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                      <img src={respect} alt="respect"/>
                      <h3>Respect</h3>
                      <p>
                        ACGCET supports a community with admiration and thoughtfulness among students, faculty, staff.
                        At our college, we believe in creating a respectful environment, where diversity is celebrated, 
                        and differences are embraced.We treat each other with respect, recognizing that it is the key
                        to building strong relationships and a harmonious community.
                      </p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                      <img src={responsibility} alt="responsibility"/>
                      <h3>Responsibility</h3>
                      <p>
                        ACGCET commits to being responsible for accountability in hassle-free environment of operations at all levels 
                        of the institution, continuous assessment for better academic programs, transparency in budgetary and operational affairs.
                        At our college, we instill a strong sense of responsibility in our students, empowering them to take charge of their actions
                        and choices.
                      </p>
                    </div>
                </div>

            </div>

            <div className="row space">

                <div className="column">
                    <div className="card">
                        <img src={trust} alt="trust" />
                        <h3>Trust</h3>
                        <p>ACGCET is committed to earn the public’s trust in all steps and actions through teaching
                            and learning process.We believe that trust is the foundation for collaboration and innovation, 
                            fostering an environment where ideas can flourish and dreams can be realized.At our college, 
                            we encourage open and honest communication, building a culture of trust where individuals feel 
                            valued and supported.</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                      <img src={diversity} alt="ethics" />
                      <h3>Diversity</h3>
                      <p>
                            ACGCET is devoted in supporting a diverse student, faculty, and staff for enhanced multicultural
                            learning opportunities. ACGCET respects the opportunity to work, learn, and develop to embrace the 
                            diversity of individuals, their ideas, irrespective of their caste, race, ethnicity, religion, 
                            spiritual beliefs, national origin, age, gender, marital status, socioeconomic background, and
                            physical ability.
                      </p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                      <img src={ie} alt="respect" />
                      <h3>Intellectual Excellence</h3>
                      <p>
                            ACGCET believes in lifelong intellectual development of students, faculty, and staff. ACGCET
                            executes in search of upgradation of knowledge for continuous growth in teaching and learning.
                            We strive to create an environment that challenges minds, ignites curiosity, and encourages 
                            critical thinking, paving the way for intellectual excellence.
                      </p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                      <img src={teamwork} alt="responsibility"/>
                      <h3>Team Work</h3>
                      <p>
                            ACGCET believes that teamwork is the driving force that propels us towards 
                            achieving common goals and shared visions.Teamwork at our college is not just about working 
                            together but valuing each member's unique strengths and contributions.In the spirit of teamwork,
                            we recognize that the collective efforts of a diverse group can bring about innovative and
                            transformative outcomes.
                      </p>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Vision