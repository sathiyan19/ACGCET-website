import React from "react";

import "./Yrc.css";
import { Underline } from "../../widgets";
import { Listformat } from "../../components";
import abt from "../../assets/pictures/yrc/abt.webp";
import yrclogo from "../../assets/pictures/yrc/ll.webp";
import { yrclist } from "../../constants/yrc";

const Yrc = () => {
  return (
    <div className="yrcwhole">
      <Underline heading="Indian Red Cross Society" />
      <div className="yrcabt">
        <div className="yrcabttext">
          <p>
            The Indian Red Cross is a voluntary humanitarian organization having
            a network of over 1100 branches throughout the country, providing
            relief in times of disasters/emergencies and promotes health & care
            of the vulnerable people and communities. It is a leading member of
            the largest independent humanitarian organization in the world, the
            International Red Cross & Red Crescent Movement. The movement has
            three main components, the International Committee of Red Cross
            (ICRC), 192 National Societies and International Federation of Red
            Cross and Red Crescent Societies. The Mission of the Indian Red
            Cross is to inspire, encourage and initiate at all times all forms
            of humanitarian activities so that human suffering can be minimized
            and even prevented and thus contribute to creating more congenial
            climate for peace.
          </p>
        </div>
        <div className="yrcabtimg">
          <img src={abt} alt="abt" />
        </div>
      </div>

      <Listformat points={yrclist} />
      <Underline heading="Red Cross Embelem"/>
      <div className="yrclogo">
        <div className="yrclogotext">
          <p>
            Red Cross on a white background, is the Emblem of Red Cross,
            recognized in 1864 as the distinctive sign for medical relief teams
            on the battle field. In the Russo-Turkish war the Ottoman empire
            used a Red Crescent in place of the Red Cross. Egypt too opted for
            the Red Crescent while Persia chose a Red Lion on a white
            background. These symbols were written and accepted into the 1929
            Geneva Conventions. The IRCS adopted RED CROSS as its emblem. The
            National Society make use of the emblem as an indicative device in
            peacetime and during armed conflicts within the limits stipulated in
            national legislation, the regulations and its statutes only for
            activities consistent with the principles set out by International
            Federation of the Red Cross and Red Crescent. During the General
            Assembly and the council of Delegates in November 2005 at Geneva,
            Red Crystal has been adopted as another emblem for the Red Cross Red
            Crescent movement.
          </p>
        </div>
        <div className="yrclogopic">
            <img src={yrclogo} alt="yrclogo"/>
        </div>
      </div>
    </div>
  );
};

export default Yrc;
