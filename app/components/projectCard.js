import Link from "next/link"

export default function ProjectCard({ id, title, techs, picture }) {
  const topTechs = techs.slice(0, 3);   // extract the first 3 techs from the array

  return (
    <div className="card bg-base-200 shadow-md border-1 group border-primary transition duration-200">
      <figure className="h-48 bg-base-100 p-4 flex justify-center items-center">
        <img src={picture} alt={title} className="max-h-full object-contain" />
      </figure>

      <Link href={`/projects/${id}`} className="card-body group cursor-pointer flex flex-row items-center justify-between hover:opacity-40">
        <div>
          <h2 className="card-title text-base mb-2">{title}</h2>
          <div className="flex flex-wrap gap-2">
            {topTechs.map((tech, i) => (
              <span key={i} className="badge badge-outline">{tech}</span>
            ))}
          </div>
        </div>

        <div className="text-xl transition-transform group-hover:translate-x-1">
          ▶︎
        </div>
      </Link>
    </div>
  )
}