import Image from 'next/image';

export default function Intro() {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
            <div className="avatar lg:me-5 mb-3">
                <div className="relative w-[180px] h-[180px] lg:w-[256px] lg:h-[256px] rounded-full border-2 border-double">
                    <Image src="/my-avatar-pic.jpg" alt="avatar picture" sizes="(max-width:100px)" fill priority/>
                </div>
            </div>
            <div>
            <h1 className="text-3xl font-bold">Aung Pyae Phyo</h1>
            <p className="py-6 md:flex md:justify-content:center">
                Software developer, doing web development, interested in football, supports Barcelona, love learning new frameworks
                and technologies, yep, thats all for now
            </p>
            <button className="btn">Get Started</button>
            </div>
        </div>
        </div>
    )
}