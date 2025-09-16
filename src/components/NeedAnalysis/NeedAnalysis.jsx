import React from 'react'
import { TheoreticalPedagogy, LimitedIndustry, FacultyDevelopmentGaps, EmployabilityConcerns, WeakInnovation } from '../../Images/CommonImage'
import "../NeedAnalysis/NeedAnalysis.css"

function NeedAnalysis() {
    return (
        <section className="need">
            <div className="container">
                <div className="titles mb-5">
                    <h2>Need Analysis</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                        <div className="analysisBox">
                            <img src={TheoreticalPedagogy} alt="" />
                            <div className="boxText">
                                <h3>Theoretical Pedagogy</h3>
                                <p>Over-reliance on rote learning
                                    means students lack practical
                                    application skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                        <div className="analysisBox">
                            <img src={LimitedIndustry} alt="" />
                            <div className="boxText">
                                <h3>Limited Industry Exposure</h3>
                                <p>A significant gap exists between
                                    academic training and real-world
                                    industry needs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                        <div className="analysisBox">
                            <img src={WeakInnovation} alt="" />
                            <div className="boxText">
                                <h3>Weak Innovation Ecosystem</h3>
                                <p>Innovation efforts are hindered by a lack
                                    of structured support for
                                    ideation and prototyping</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                        <div className="analysisBox">
                            <img src={FacultyDevelopmentGaps} alt="" />
                            <div className="boxText">
                                <h3>Faculty Development Gaps</h3>
                                <p>Faculty often lack training in modern
                                    teaching methods and industry-relevant curriculum design.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                        <div className="analysisBox">
                            <img src={EmployabilityConcerns} alt="" />
                            <div className="boxText">
                                <h3>Employability Concerns</h3>
                                <p>Many graduates struggle with
                                    unemployment due to insufficient
                                    technical and professional skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NeedAnalysis