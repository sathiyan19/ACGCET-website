import React, { useEffect } from 'react'

import "./Placement.css";
import "./Placement_stats.css";
import { Backtotop,Floatinmenu,Underline,Deptvision,Deptmission } from "../../widgets";
import { placement_menu } from "../../constants/placement";

import {Radial_menu } from "../../components";

import { FaGraduationCap } from "react-icons/fa";
import oracle_placement from '../../assets/pictures/news_img/oracle.webp'

const Placement_stats = () => {
    useEffect(() => {
        document.title='ACCET-Placement-Statistics';
      }, []);
  return (
    <div className='placement'>
    <div className='placementbg'>
      <div className='placementheading'>
        Placement
      </div>
      <div className='placement_sub_heading'>Statistics</div>
    </div>
    <section className='placementdark'>
      <div className='dept_float_menu'>
      <Floatinmenu logo={FaGraduationCap} head="Menu" links={placement_menu} />
      </div>
      <Radial_menu menu_links={placement_menu}/>
      <div className='placement_abt'>
        <div className="placement_stat_box">
            <Underline heading="Year 2022-23"/> 
            <div className='placement_stat_holder'>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>3.8LPA</div>
                    <div className='placement_stat_caption'>Average Package</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>8.6LPA</div>
                    <div className='placement_stat_caption'>Highest Package</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>25</div>
                    <div className='placement_stat_caption'>Packages &gt; 6LPA</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>129</div>
                    <div className='placement_stat_caption'>Packages between 3LPA & 6LPA</div>
                </div>
            </div>
        </div>
        <div className="placement_stat_box">
            <Underline heading="Year 2021-22"/> 
            <div className='placement_stat_holder'>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>3.4LPA</div>
                    <div className='placement_stat_caption'>Average Package</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>7LPA</div>
                    <div className='placement_stat_caption'>Highest Package</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>19</div>
                    <div className='placement_stat_caption'>Packages &gt; 6LPA</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>148</div>
                    <div className='placement_stat_caption'>Packages between 3LPA & 6LPA</div>
                </div>
            </div>
        </div>
        <div className="placement_stat_box">
            <Underline heading="Year 2020-21"/> 
            <div className='placement_stat_holder'>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>2.6LPA</div>
                    <div className='placement_stat_caption'>Average Package</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>6.3LPA</div>
                    <div className='placement_stat_caption'>Highest Package</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>2</div>
                    <div className='placement_stat_caption'>Packages &gt; 6LPA</div>
                </div>
                <div className='placement_stat_layout'>
                    <div className='placement_stat_num'>56</div>
                    <div className='placement_stat_caption'>Packages between 3LPA & 6LPA</div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <Backtotop />
  </div>
  )
}

export default Placement_stats