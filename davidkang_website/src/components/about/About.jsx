import "./about.css";
import placeholder from "../../img/placeholder.png";
import text from "../Text.json";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={placeholder} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1>About Me</h1>
                <p className="a-sub">
                    {text.tempShort}
                </p>
                <p className="a-desc">
                    {text.tempLong}
                </p>

                <div className="a-award">
                    <img src={placeholder} alt="" className="a-award-img" />
                </div>
            </div>
        </div>
    )
}

export default About
