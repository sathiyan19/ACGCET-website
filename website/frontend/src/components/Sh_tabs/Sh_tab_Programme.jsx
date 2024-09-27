import React, {useState} from 'react'

import Sh_mat_prog from '../../containers/Sh_Maths/Sh_mat_prog'
import Sh_Phy_prog from '../../containers/Sh_Physics/Sh_Phy_prog';
import Sh_Chemi_prog from '../../containers/Sh_Chemistry/Sh_Chemi_prog';
import Sh_Eng_prog from '../../containers/Sh_English/Sh_Eng_prog';
const Sh_tab_Programme = () => {
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
                      <Sh_Eng_prog/>
                      </div>
                  <div className="shcontent content2">
                      <Sh_mat_prog/>
                      </div>
                  <div className="shcontent content3">
                      <Sh_Chemi_prog/>
                      </div>
                  <div className="shcontent content4">
                      <Sh_Phy_prog/>
                      </div>
          </section>
        </div>
    </div>
  )
}

export default Sh_tab_Programme
