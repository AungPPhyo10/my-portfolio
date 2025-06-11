import Image from 'next/image';

export default function Intro() {
  return (
    <div className="hero mt-3">
      <div className="hero-content flex-col lg:flex-row">
        {/* Avatar */}
        <div className="avatar lg:me-5">
          <div className="relative w-[200px] h-[200px] lg:w-[256px] lg:h-[256px] rounded-full  border-2 border-primary drop-shadow-primary drop-shadow-md">
            <Image src="/my-avatar-pic.jpg" alt="Avatar picture" sizes="(max-width:100px)" fill priority />
          </div>
        </div>

        <div className="bg-base-200  shadow-lg/30 rounded-md p-6 animate__animated animate__fadeInUp w-full">
          <h2 className="text-2xl font-bold mb-2 text-primary ">
            Aung Pyae Phyo
          </h2>
          <p className="mb-4">
            A full-stack developer, passionate about modern web development with <strong>Node.js</strong>.
            Interested in implementing CI/CD operations and cloud computing with <strong>Microsoft Azure</strong>. 
            Continuous learner in the field of <strong>AI and Retrieval Augmented Generation(RAG)</strong> models.     
          </p>
          <div className="opacity-80">
            <p>🌍 <span className="font-medium">Singapore</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
