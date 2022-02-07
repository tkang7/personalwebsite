import "./projectList.css"
import text from "../Text.json"
import Project from "../project/Project"
import {projects} from "../../data"

const ProjectList = () => {
    return (
        <div>
            <div className="pl">
                <div className="pl-texts">
                    <h1 className="pl-title">
                        {text.tempShort}
                    </h1>
                    <p className="pl-desc">
                        {text.tempLong}
                    </p>
                    <div className="pl-list">
                        {projects.map((item) => (
                            <Project key={item.id} img={item.img} link={item.link} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectList
