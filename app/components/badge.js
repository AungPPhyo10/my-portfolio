import Image from 'next/image';

export default function Badge({ name, logo }) {
  return (
    <div className="badge badge-xl badge-outline gap-2 px-3 py-2 text-sm flex items-center hover:scale-110 transition">
      <Image src={logo} alt={`${name} logo`} width={24} height={24} className="w-6 h-6 object-contain" />
      {name}
    </div>
  );
}