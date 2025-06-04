import {projects} from '../../../lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({params}) {
    const {id} = params;
    return {title: `My Project - ${id}`};
}

export const dynamicParams = false;

export default function Page({ params }) {
    let {id} = params;
    const isValidId = /^\d+$/.test(id)
    if (!isValidId) {
        notFound();
    }

    id = Number(params.id)
    const project = projects.find((p) => p.id === id)

    if (!project) {
        // notFound();
        return (
        <div className="my-4 text-4xl font-extrabold text-red-400">Project not found!</div>
        )
    }
        
    
    return (
        <div className="p-6 space-y-2">

        <Link href="/projects" className="btn btn-sm btn-primary w-fit font-bold">
            ← Back to Projects
        </Link>

        <div className="hero">
            <div className="hero-content flex-col md:flex-row-reverse gap-5">

            <img src={project.picture} alt={project.title} className="max-w-sm w-full rounded-lg shadow-md"/>

            <div>
                <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
                <p className="mb-5">{project.description}</p>
                <br/>
                
                <div className="flex flex-wrap gap-3 mb-5">
                <div className="font-bold">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current me-2"
                    >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                    </svg>
                    Techs used : 
                </div>
                
                {project.techs.map((tech, i) => (
                    <span key={i} className="badge badge-outline hover:scale-110 transition">
                    {tech}
                    </span>
                ))}
                </div>

                {project.github && <div className="mb-2 link link-primary hover:scale-110 transition">{project.github}</div>}
                {project.link && <div className="link link-primary hover:scale-110 transition">{project.link}</div>}
            </div>
            </div>
        </div>
        </div>
    )
}