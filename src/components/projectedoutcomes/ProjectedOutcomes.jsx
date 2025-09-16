import React from 'react'
import { mechanic,student,product,school,university } from '../../Images/CommonImage'
import "../projectedoutcomes/projectedoutcomes.css"

function ProjectedOutcomes() {
    return (
        <section className="need projected">
            <div className="container">
                <div className="titles mb-5">
                    <h2>Projected Outcomes</h2>
                    <p className="mt-4">The PRACTICE initiative aims to double the average employment rate in participating
                        institutions by 2028, achieved through key outcomes:
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="box2">
                            <img src={mechanic} alt="" />
                            <h3>Students Trained</h3>
                            <p>In real-world projects and design thinking</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="box2">
                            <img src={student} alt="" />
                            <h3>Faculty Empowered</h3>
                            <p>Through state-of-the-art Faculty
                                Development Programs
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="box2">
                            <img src={product} alt="" />
                            <h3>Patentable Products</h3>
                            <p>Developed through InventX and student-led
                                innovation</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="box2">
                            <img src={school} alt="" />
                            <h3>Students Certified</h3>
                            <p>In soft skills for workplace readiness</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                        <div className="box2">
                            <img src={university} alt="" />
                            <h3>Colleges Mentored</h3>
                            <p>By 50 academic and industry mentors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectedOutcomes
