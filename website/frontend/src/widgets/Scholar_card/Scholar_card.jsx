import React from 'react'

import './Scholar_card.css'

const Scholar_card = ({schbg,IncLimit,schamt,schterms1,schterms2,schterms3}) => {
  return (
    <div>
      <div class="scholarcard">
            <div class="schcard">
                <div class="schimg">
                    <img src={schbg}/>
                </div>
                <div class="schcontent">
                    <h3>Details</h3><br/>
                    <p class="schdesc">
                    {schterms1 && (
                        <p>{schterms1}</p>
                    )}
                    {schterms2 && (
                        <p>{schterms2}</p>
                    )}
                    {schterms3 && (
                        <p>{schterms3}</p>
                    )}<br/>
                    
                        INCOME LIMIT: {IncLimit}<br/><br/>
                        AMOUNT (Approx): {schamt}
                    </p>
                </div>
            </div>

            
            
        </div>
    </div>
  )
}

export default Scholar_card
