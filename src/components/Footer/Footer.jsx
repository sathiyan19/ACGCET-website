import React from 'react'

import Affliation from '../../assets/pdfs/Affiliation.pdf'
import Autonomous from '../../assets/pdfs/Conferment of Autonomous Status.pdf'
import Teqip_audit from '../../assets/pdfs/TEQIP- Audited statements.pdf'
import ariia from '../../assets/pdfs/ARIIA-2020-21 report.pdf'
import conduct from '../../assets/pdfs/Code of Conduct for Students.pdf'
import service from '../../assets/pdfs/Employee Service Rules.pdf'
import fire from '../../assets/pdfs/FIRE SERVICE LICENCE 2022-23.pdf'
import occupancy from '../../assets/pdfs/OCCUPANCY CERTIFICATE.pdf'
import stability from '../../assets/pdfs/STRUCTURAL AND STABILITY CERTIFICATE.pdf'
import audit from '../../assets/pdfs/Audited Statement 2022-2023.pdf'

import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="sec-aboutus col-lg-3">
                        <p className="first">About Us</p>
                        <p className="moto">We foster to aim for the good and development of our students at any cost.</p>
                        <ul className="sci">
                            <li><a href="https://www.instagram.com/iic_acgcet/"><i className="fa fa-instagram icons" aria-hidden="true" ></i></a></li>
                            <li><a href="https://www.facebook.com/accet/"><i className="fa fa-facebook icons" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.google.com/maps/place/Alagappa+Chettiar+Government+College+of+Engineering+%26+Technology./@10.089863,78.7939322,16.43z/data=!4m5!3m4!1s0x3b0067a028f8a8f9:0x9c2484c6df0fb26!8m2!3d10.090038!4d78.794712"><i className="fa fa-map-marker icons" aria-hidden="true" ></i></a></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks col-lg-3">
                        <p className="first">Disclosure</p>
                        <ul>
                            <li><a href="#">NBA</a></li>
                            <li><a href="#">NAAC</a></li>
                            <li><a href="/aicte">AICTE</a></li>
                            <li><a href={Affliation} target='blank' rel='noopener noreferrer' media='print'>Affliation</a></li>
                            <li><a href={Autonomous} target='blank' rel='noopener noreferrer' media='print'>Autonomous</a></li>
                            <li><a href={fire} target='blank' rel='noopener noreferrer' media='print'>Fire Service License</a></li>
                            <li><a href={occupancy} target='blank' rel='noopener noreferrer' media='print'>Occupancy Certificate</a></li>
                            <li><a href={stability} target='blank' rel='noopener noreferrer' media='print'>Structural Stability Certificate</a></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks col-lg-3">
                        <p className="first">Attachments</p>
                        <ul>
                            <li><a href={Teqip_audit} target='blank' rel='noopener noreferrer' media='print'>TEQIP</a></li>
                            <li><a href={ariia} target='blank' rel='noopener noreferrer' media='print'>ARIIA</a></li>
                            <li><a href={audit} target='blank' rel='noopener noreferrer' media='print'>Audit Statement</a></li>
                            <li><a href={conduct} target='blank' rel='noopener noreferrer' media='print'>Code of Conduct</a></li>
                            <li><a href={service} target='blank' rel='noopener noreferrer' media='print'>Employees Service rules</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 sec-contact">
                        <p className="first">Contact Us</p>
                        <ul className="info">
                            <li className="social">
                                <span><i className="fa fa-map-marker icon" aria-hidden="true"></i></span>
                                <span>Alagappa Chettiar Government<br /> College of Engineering and<br /> Technology,<br />
                                    Karaikudi-630003.<br />
                                    Sivagangai, Tamilnadu.</span>
                            </li>
                            <li className="social">
                                <span><i className="fa fa-phone icon" aria-hidden="true"></i></span>
                                <p><a href="tel:04565 224528">04565 24528</a><br />
                                    <a href="tel:224535">224535</a></p>
                            </li>
                            <li className="social">
                                <span><i className="fa fa-envelope-o icon" aria-hidden="true" ></i></span>
                                <p><a href="mailto:accetprincipal@gmail.com" className="ga">accetprincipal@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyrights">
                    <p className="copy">&#169; 2022 ACGCET, Karaikudi, All rights are reserved</p>
                    <a href="#" className="maintained">Developed & Maintained by CSE students</a>
                </div>
            </div>
        </div>
    );
}

export default Footer