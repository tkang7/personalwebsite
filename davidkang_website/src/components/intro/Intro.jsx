import React from 'react'
import './intro.css'
import headshot_main from "../../img/David_Kang_nobg.png"
import text from "../Text.json"

const Intro = () => {
    const Text = text;

    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 classNAme="i-name">David Kang</h1>

                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Project Manager</div>
                            <div className="i-title-item">Non-Profit</div>
                            <div className="i-title-item">Entrepreneur</div>
                            <div className="i-title-item">Athlete</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        {Text.intro}
                    </p>
                </div>
                .
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={headshot_main} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro
