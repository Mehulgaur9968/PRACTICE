import React from 'react'
import Banner from '../components/banner/Banner'
import NeedAnalysis from '../components/NeedAnalysis/NeedAnalysis'
import NeedScope from '../components/needscope/NeedScope'
import ProjectedOutcomes from '../components/projectedoutcomes/ProjectedOutcomes'
import Introducing from '../components/Introducing/Introducing'

function HomePage() {
    return (
        <>
            <Banner />
            <NeedAnalysis />
            <NeedScope />
            <ProjectedOutcomes />
            <Introducing/>
        </>
    )
}

export default HomePage