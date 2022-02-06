import React from 'react'
import './intro.css'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h2 classNAme="i-name">David Kang</h2>

                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Project Manager</div>
                            <div className="i-title-item">Non-Profit Director</div>
                            <div className="i-title-item">Entrepreneur</div>
                            <div className="i-title-item">Athlete</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am a Computer Engineering student at the University of British Columbia. Over the course of my undergraduate degree,
                        I started a registered Canadian non-profit organization, co-founded a mental health platform serving 8000+ students/staff,
                        completed various different internships/full-time opportunities holding positions such as Agile Developer, Technical Project Coordinator, Sales Manager, and Administrative Intern,
                        competed and won awards at hackathons and other events, and most importantly, met wonderful people who I now consider my best friends. 
                    </div>
                </div>
                .
            </div>
            <div className="i-right">right</div>
        </div>
    )
}

export default Intro
