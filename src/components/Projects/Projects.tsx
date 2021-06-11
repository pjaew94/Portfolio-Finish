import { FC, useState }from 'react'

import './Projects.scss';
import { projectList } from './projectsList';


const Projects: FC = () => {

    interface ICurrentProjectInfo {
        name: string;
        link: string;
        github: string;
        img1: HTMLImageElement;
        img2?: HTMLImageElement;
        technologies: string[];
        problem: string;
        solution: string;
    }

    const [currentProject, setCurrentProject] = useState<number>(0)
    const [currentProjectInfo, setCurrentProjectInfo] = useState<ICurrentProjectInfo>();

    const onClickProject = (index) => {

    }


    return (
        <div className='section-container'>
            <div className="section-content projects-section-content">
                <div className="projects-text"><h1>PROJECTS ZOINK</h1></div>
                <div className="projects-display-container">
                    <div className="project-content"></div>
                    <div className="project-list">
                        {projectList.map((i, index) => {
                            return <div className={`item-container ${index === currentProject && "current-item-container"}`} onClick={() => onClickProject(index)}>
                                <h2>Project {i.roman} -</h2>
                                <h2>{i.name}</h2>
                                <h2>{i.type}</h2>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
