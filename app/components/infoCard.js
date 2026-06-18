export default function InfoCard({ title, description, range }) {
  return (
    <div className="card w-full bg-base-200/60 shadow-sm border border-base-300/50 border-l-4 border-l-primary hover:border-l-secondary/85 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out group">
      <div className="card-body p-5">
        <h3 className="card-title font-bold text-base text-base-content/90 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        {range && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-primary/80 uppercase tracking-wider my-1">
            <span>{range}</span>
          </div>
        )}
        <p className="text-sm text-base-content/75 leading-relaxed mt-1">
          {description}
        </p>
      </div>
    </div>
  )
}
