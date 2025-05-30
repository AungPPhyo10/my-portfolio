export default function InfoCard({ title, description, range }) {
  return (
    <div className="card bg-base-300 shadow-md border-1 border-dashed">
      <div className="card-body p-4">
        <h3 className="card-title font-bold text-base">{title}</h3>
        {range && <p className="text-sm opacity-70">{range}</p>}
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}