import React, { useState } from 'react';

import { Sh_Eng_fac,Sh_Chemi_fac, Sh_mat_fac, Sh_Phy_fac } from '../../containers';

const Sh_tab_faculty = () => {
    const [selectedOption, setSelectedOption] = useState('sh_English');

    return (
      <div>
        <div className="sh_tabs">
          <input
            type="radio"
            name="sh_slider"
            id="sh_English"
            checked={selectedOption === 'sh_English'}
            onChange={() => setSelectedOption('sh_English')}
          />
          <input
            type="radio"
            name="sh_slider"
            id="sh_Maths"
            checked={selectedOption === 'sh_Maths'}
            onChange={() => setSelectedOption('sh_Maths')}
          />
          <input
            type="radio"
            name="sh_slider"
            id="sh_Chemistry"
            checked={selectedOption === 'sh_Chemistry'}
            onChange={() => setSelectedOption('sh_Chemistry')}
          />
          <input
            type="radio"
            name="sh_slider"
            id="sh_Physics"
            checked={selectedOption === 'sh_Physics'}
            onChange={() => setSelectedOption('sh_Physics')}
          />
          <nav>
            <label
              htmlFor="sh_English"
              className={selectedOption === 'sh_English' ? 'sh_English' : ''}
            >
              English
            </label>
            <label
              htmlFor="sh_Maths"
              className={selectedOption === 'sh_Maths' ? 'sh_Maths' : ''}
            >
              Mathematics
            </label>
            <label
              htmlFor="sh_Chemistry"
              className={selectedOption === 'sh_Chemistry' ? 'sh_Chemistry' : ''}
            >
              Chemistry
            </label>
            <label
              htmlFor="sh_Physics"
              className={selectedOption === 'sh_Physics' ? 'sh_Physics' : ''}
            >
              Physics
            </label>
            <div className="sh_slider"></div>
          </nav>
          <section>
          <div className="shcontent content1">
                      <Sh_Eng_fac/>
                      </div>
                  <div className="shcontent content2">
                      <Sh_mat_fac/>
                      </div>
                  <div className="shcontent content3">
                      <Sh_Chemi_fac/>
                      </div>
                  <div className="shcontent content4">
                      <Sh_Phy_fac/>
                      </div>
          </section>
        </div>
      </div>
  )
}

export default Sh_tab_faculty
