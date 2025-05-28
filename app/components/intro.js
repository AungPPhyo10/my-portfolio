import Image from 'next/image';

export default function Intro() {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
            <div className="avatar">
                <div className="relative w-[180px] h-[180px] lg:w-[256px] lg:h-[256px] rounded-full border-2 border-double">
                    <Image src="/my-avatar-pic.jpg" alt="avatar picture" sizes="(max-width:100px)" fill />
                </div>
            </div>
            <div>
            <h1 className="text-3xl font-bold">Box Office News!</h1>
            <p className="py-6 md:flex md:justify-content:center">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn">Get Started</button>
            </div>
        </div>
        </div>
    )
}