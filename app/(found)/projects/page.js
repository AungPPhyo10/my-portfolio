import {projects} from '../../lib/data';
import ProjectCard from '../../components/projectCard';
import Image from 'next/image';

export default function Project() {
    return (
        <div>
            <h1 className="heading mb-[35px] animate__animated animate__fadeInDown">My Projects</h1>
            
            <div className="block text-center mb-4">
                <div className="flex flex-row justify-center gap-3">
                    <Image src="/logos/git.svg" alt="Github icon" width={25} height={25}/>
                    <a href="https://github.com/AungPPhyo10" target="_blank">Browse my Github Repository</a>
                </div>
                
                <label className="input input-md mt-5">
                <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" id="searcher" name="searcher" className="grow" placeholder="Search for projects..." />
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 p-6">
            {projects.map(project => (
                <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                techs={project.techs}
                picture={project.picture}
                />
            ))}
            </div>

        </div>    
    )
}