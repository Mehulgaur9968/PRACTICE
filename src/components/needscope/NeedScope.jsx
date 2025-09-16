import React from 'react'
import "../needscope/needscope.css"
import {gardening,pottedplant,trees} from "../../Images/CommonImage"

function NeedScope() {
    return (
        <section className="need scope" style={{ background: "url('./assets/images/banner.jpg') no-repeat" }}>
            <div className="container">
                <div className="titles mb-5">
                    <h2>Scope and Deployment Model</h2>
                    <p className="mt-4">PRACTICE is a 3-year initiative (2025-2028) targeting 1000 tier-2 and tier-3
                        engineering
                        colleges selected by AICTE.
                        It aims to impact over 5 lakh students and 10,000 faculty members
                        through a phased deployment approach:</p>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="box2">
                            <img src={gardening} alt="" />
                            <h3>Phase 1: 2025-26</h3>
                            <p>200 colleges onboarded, focusing on initial
                                interventions.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="box2">
                            <img src={pottedplant} alt="" />
                            <h3>Phase 2: 2026-27</h3>
                            <p>300 additional colleges join, deepening
                                intervention intensity.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="box2">
                            <img src={trees} alt="" />
                            <h3>Phase 3: 2027-28</h3>
                            <p>Final 500 colleges integrated, expanding full
                                program coverage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NeedScope
