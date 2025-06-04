'use client'

import { useState, useEffect, useDeferredValue, memo } from 'react'
import Image from 'next/image'
import { projects } from '../../lib/data'
import ProjectCard from '../../components/projectCard'

const MemoizedProjectCard = memo(ProjectCard)

export default function Project() {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)
  const [projectDisplay, setProjectDisplay] = useState(projects)

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(deferredQuery.toLowerCase())
      )
      setProjectDisplay(filteredProjects);
    }, 500)         // put delay to avoid over-updating while typing

    return () => clearTimeout(timer)  // Clean up timeout
  }, [deferredQuery])

  return (
    <div>
      <h1 className="heading mb-4 animate__animated animate__fadeInUp">My Projects</h1>

      <div className="block text-center mb-4">
        <div className="flex flex-row justify-center gap-3">
          <Image src="/logos/git.svg" alt="Github icon" width={25} height={25} />
          <a href="https://github.com/AungPPhyo10" target="_blank" className="link link-primary hover:scale-110 transition">Browse my Github Repository</a>
        </div>

        <label className="input input-md mt-5">
          <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            id="searcher"
            name="searcher"
            className="grow"
            placeholder="Search for projects..."
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </label>
      </div>

      {projectDisplay.length === 0 ? (
        <div className="text-center text-red-500 text-xl font-semibold mt-12">
          No projects found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 p-6">
          {projectDisplay.map(project => (
            <MemoizedProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              techs={project.techs}
              picture={project.picture}
            />
          ))}
        </div>
      )}
    </div>
  )
}
