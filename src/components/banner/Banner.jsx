import React from 'react'
import { banner, newlogo } from '../../Images/CommonImage'
import "../banner/banner.css"

function Banner() {
    return (
        <section className="banner">
            <img src={banner} alt="" width="100%" />
            <div className="titlearea">
                <a href="#" className="bannerLogo"><img src={newlogo} alt="Logo2" /></a>
                <h2>Project for Advancing Critical Thinking, Industry
                    Connect and Employability (PRACTICE)</h2>
                <p>A transformative initiative to improve engineering education in 1000 tier-2 and tier-3 colleges
                    across India. This joint project by AICTE,
                    CRISP, MBF and LEAP aims to enhance critical thinking, strengthen industry connections, and boost
                    employability for over 5 lakh students and strengthen capacity of over 10,000
                    faculty members</p>
            </div>
        </section>
    )
}

export default Banner