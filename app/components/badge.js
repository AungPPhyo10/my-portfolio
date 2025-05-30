export default function Badge({ name, logo }) {
  return (
    <div className="badge badge-xl badge-outline gap-2 px-3 py-2 text-sm flex items-center hover:scale-110 transition">
      <img src={logo} alt={`${name} logo`} className="w-6 h-6" />
      {name}
    </div>
  );
}