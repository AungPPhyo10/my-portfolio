import Image from 'next/image';

export default function Intro() {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
            <div className="avatar lg:me-5">
                <div className="relative w-[200px] h-[200px] lg:w-[256px] lg:h-[256px] rounded-full border-primary border-2">
                    <Image src="/my-avatar-pic.jpg" alt="Avatar picture" sizes="(max-width:100px)" fill priority/>
                </div>
            </div>
            <div>
            <p className="py-6 flex justify-center bg-base-200 rounded-md p-5">
                My name is Aung Pyae Phyo, a software developer, enthusiastic about web development, interested in football, 
                supports Barcelona, love learning new frameworks and technologies, yep, thats all for now
                📧 aungphyoe9190@gmail.com
                🗺️ Singapore
            </p>
            </div>
        </div>
        </div>
    )
}

/**
 * <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg> 
    Email : aung.p.phyo123@gmail.com

    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
    </svg>

 */