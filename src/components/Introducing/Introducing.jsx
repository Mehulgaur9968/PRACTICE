import React, { useState } from 'react'
import "../Introducing/Introducing.css"
import {
    growth, camping, knowledge, IDEALabs,
    InventX, Innovation, Structured, Benefits, makers, Theseprograms, Ultimately, Comm, data, think, problem
} from '../../Images/CommonImage'
import { FaPlus, FaMinus } from "react-icons/fa";

function Introducing() {
    const [open, setOpen] = useState(false);

    const toggleAccordion = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="need">
            <div className="container">
                <div className="titles mb-5">
                    <h2>Introducing PRACTICE: A Comprehensive Solution</h2>
                </div>
                <div className="accordion" id="practiceAccordion">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center" id="headingOne">
                            <h5 className="mb-0 w-100">
                                <button onClick={() => toggleAccordion(1)} className="btn btn-link text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span>Project-Based Learning</span>
                                    {open === 1 ? <FaMinus color='#032761' size={26} /> : <FaPlus color='#032761' size={26} />}
                                </button>
                            </h5>

                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                            data-parent="#practiceAccordion">
                            <div className="card-body">
                                <h3>Project-Based Learning through LEAP</h3>
                                <p>LEAP (Learn Engineering by Activity with Products) is dedicated to enhancing
                                    engineering skills through hands-on product design and development. All LEAP
                                    activities
                                    emphasize "learning by doing" while students work collaboratively in teams to build
                                    functional products.</p>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="box2">
                                            <img src={growth} alt="" />
                                            <h3>Faculty Development</h3>
                                            <p>Empowering educators with practical teaching
                                                methodologies to guide project-based learning.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="box2">
                                            <img src={camping} alt="" />
                                            <h3>Student Bootcamps</h3>
                                            <p>Intensive, hands-on sessions for students to
                                                gain real-world experience in product development.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="box2">
                                            <img src={knowledge} alt="" />
                                            <h3>Innovative Projects</h3>
                                            <p>Fostering creativity and problem-solving through development
                                                of novel and impactful products.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center" id="headingTwo">
                            <h5 className="mb-0 w-100">
                                <button onClick={() => toggleAccordion(2)} className="btn btn-link collapsed text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span>Innovation</span>
                                    {open === 1 ? <FaMinus color='#032761' size={26} /> : <FaPlus color='#032761' size={26} />}
                                </button>
                            </h5>

                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                            data-parent="#practiceAccordion">
                            <div className="card-body">
                                <p>PRACTICE fosters problem-solving, invention, and prototyping capabilities among
                                    students to leverage India's rapidly evolving innovation
                                    economy. It focuses on three key components:</p>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="analysisBox">
                                            <img src={IDEALabs} alt="" />
                                            <div className="boxText">
                                                <h3>IDEA Labs as Hubs</h3>
                                                <p>Dedicated spaces and programs fostering
                                                    problem-solving and creative invention</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="analysisBox">
                                            <img src={InventX} alt="" />
                                            <div className="boxText">
                                                <h3>InventX</h3>
                                                <p>Structured initiative for turning innovative
                                                    ideas into patentable products and
                                                    prototypes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="analysisBox">
                                            <img src={Innovation} alt="" />
                                            <div className="boxText">
                                                <h3>Innovation Lite Program at IITs</h3>
                                                <p>Specialized training and mentorship for
                                                    innovation and entrepreneurial mindsets.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center" id="headingThree">
                            <h5 className="mb-0 w-100">
                                <button onClick={() => toggleAccordion(3)} className="btn btn-link collapsed text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span>Industry Linkages</span>
                                    {open === 1 ? <FaMinus color='#032761' size={26} /> : <FaPlus color='#032761' size={26} />}
                                </button>
                            </h5>

                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                            data-parent="#practiceAccordion">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                                        <div className="analysisBox">
                                            <img src={Structured} alt="" />
                                            <div className="boxText">
                                                <h3>Internships</h3>
                                                <p>PRACTICE helps institutions shift from short internships to
                                                    comprehensive semester-long programs,
                                                    for a more immersive industry
                                                    experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                                        <div className="analysisBox">
                                            <img src={Benefits} alt="" />
                                            <div className="boxText">
                                                <h3>Benefits for Industry</h3>
                                                <p>Extended internships allow companies to thoroughly evaluate
                                                    student capabilities before hiring, reducing recruitment risks,
                                                    improving retention, and lowering hiring costs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center" id="headingFour">
                            <h5 className="mb-0 w-100">
                                <button onClick={() => toggleAccordion(4)} className="btn btn-link collapsed text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <span>Employability Skills</span>
                                    {open === 1 ? <FaMinus color='#032761' size={26} /> : <FaPlus color='#032761' size={26} />}
                                </button>
                            </h5>

                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                            data-parent="#practiceAccordion">
                            <div className="card-body">
                                <p>Educated unemployment costs 1.5% of GDP to the economy every year. To address this
                                    crisis, there is a pressing need to revamp the education
                                    system to focus on developing skills relevant to industry.</p>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="analysisBox">
                                            <img src={makers} alt="" />
                                            <div className="boxText">
                                                <p>Project Practice offers
                                                    courses focused on essential
                                                    cognitive and soft skills.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="analysisBox">
                                            <img src={Theseprograms} alt="" />
                                            <div className="boxText">
                                                <p>These programs prepare students
                                                    for a seamless transition from
                                                    classNamerooms to careers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
                                        <div className="analysisBox">
                                            <img src={Ultimately} alt="" />
                                            <div className="boxText">
                                                <p>Ultimately, the goal is to set
                                                    students up for lasting success in
                                                    their professional and personal lives.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3>Soft Skills Courses & Deployment</h3>
                                <div className="row icons">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xxl-3">
                                        <div className="analysisBox">
                                            <div className="boxText">
                                                <img src={Comm} alt="" />
                                                <h3>Communication</h3>
                                                <p>Develops foundational and advanced communication, including
                                                    critical reading, writing, public speaking, and
                                                    multimodal communication.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xxl-3">
                                        <div className="analysisBox">
                                            <div className="boxText">
                                                <img src={data} alt="" />
                                                <h3>Data-Driven Decision Making</h3>
                                                <p>Covers data sourcing, analysis, and interpretation using various
                                                    tools, concluding with real-world case studies and a capstone
                                                    project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xxl-3">
                                        <div className="analysisBox">
                                            <div className="boxText">
                                                <img src={think} alt="" />
                                                <h3>Critical Thinking</h3>
                                                <p>Enhances the ability to construct and evaluate arguments,
                                                    recognize fallacies, and apply reasoning effectively in complex
                                                    situations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xxl-3">
                                        <div className="analysisBox">
                                            <div className="boxText">
                                                <img src={problem} alt="" />
                                                <h3>Problem Solving</h3>
                                                <p>Introduces structured, creative problem-solving methods from
                                                    framing to implementation, utilizing diverse techniques.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center" id="headingFive">
                            <h5 className="mb-0 w-100">
                                <button onClick={() => toggleAccordion(5)} className="btn btn-link collapsed text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <span> Mentoring</span>
                                    {open === 1 ? <FaMinus color='#032761' size={26} /> : <FaPlus color='#032761' size={26} />}
                                </button>
                            </h5>

                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                            data-parent="#practiceAccordion">
                            <div className="card-body">
                                <p>PRACTICE envisions creation of a robust national mentor network
                                    comprising retired senior professors, industry professionals, startup
                                    founders, technical experts, and experienced administrators. Each mentor will work
                                    with a cohort of around 20
                                    colleges.</p>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                                        <div className="cardBox">
                                            <div className="cardHead">
                                                <h2>Phase 1</h2>
                                            </div>
                                            <div className="pt-2 px-4 ">
                                                <h3>10 Mentors</h3>
                                                <p>Supporting 200 institutions</p>
                                                <ul>
                                                    <li>Enhancing Industry Connect</li>
                                                    <li>Implementation Support</li>
                                                    <li>Capacity Building and Institutional
                                                        Mentoring</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                                        <div className="cardBox">
                                            <div className="cardHead">
                                                <h2>Phase 2</h2>
                                            </div>
                                            <div className="pt-2 px-4 ">
                                                <h3>15 Mentors</h3>
                                                <p>Supporting 300 institutions</p>
                                                <ul>
                                                    <li>Implementation Support</li>
                                                    <li>Capacity Building and Institutional
                                                        Mentoring</li>
                                                    <li>Monitoring and Course Correction</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
                                        <div className="cardBox">
                                            <div className="cardHead">
                                                <h2>Phase 3</h2>
                                            </div>
                                            <div className="pt-2 px-4 ">
                                                <h3>25 Mentors</h3>
                                                <p>Supporting 500 institutions</p>
                                                <ul>
                                                    <li>Monitoring and Course Correction</li>
                                                    <li>Further Expansion and Refinement</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introducing
