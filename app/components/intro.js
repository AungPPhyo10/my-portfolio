import Image from 'next/image';

export default function Intro() {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
            <div className="avatar lg:me-5">
                <div className="relative w-[200px] h-[200px] lg:w-[256px] lg:h-[256px] rounded-full border-2 border-double">
                    <Image src="/my-avatar-pic.jpg" alt="Avatar picture" sizes="(max-width:100px)" fill priority/>
                </div>
            </div>
            <div>
            <p className="py-6 md:flex md:justify-content:center">
                Software developer, enthusiastic about web development, interested in football, 
                supports Barcelona, love learning new frameworks and technologies, yep, thats all for now
            </p>
            </div>
        </div>
        </div>
    )
}