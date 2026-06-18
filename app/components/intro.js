import Image from 'next/image';

export default function Intro() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      <div className="bg-base-200 shadow-lg rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full animate__animated animate__fadeInUp">
        {/* Avatar */}
        <div className="avatar shrink-0">
          <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-full border-4 border-primary/20 hover:border-primary transition-all duration-300 shadow-md">
            <Image src="/my-avatar-pic.jpg" alt="Avatar picture" sizes="(max-width:100px)" fill priority className="rounded-full object-cover" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold mb-3 text-primary tracking-tight">
            Aung Pyae Phyo
          </h2>
          <p className="mb-4 text-base-content/85 leading-relaxed text-sm md:text-base">
            A full-stack developer, passionate about modern web development with <strong>Node.js</strong>.
            Interested in implementing <strong>CI/CD operations</strong> and cloud computing with <strong>Microsoft Azure</strong>.
            Continuous learner in the field of <strong>AI</strong> and <strong>Retrieval Augmented Generation(RAG)</strong> models.
          </p>
          <div className="opacity-80 flex items-center justify-center lg:justify-start gap-1.5 text-sm">
            <span>🌍</span>
            <span className="font-medium text-base-content/90">Singapore</span>
          </div>
        </div>
      </div>
    </div>
  )
}

