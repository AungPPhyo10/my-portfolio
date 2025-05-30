import Intro from '../../components/intro';
import InfoCard from '../../components/infoCard';
import {awards_lists, education_lists, work_lists, techs} from '../../lib/data';
import Badge from '../../components/badge';

export default function About() {
    return (
        <div>
            <h1 className="heading">About Me</h1>

            <Intro/>

            <section className="my-8">
                <h2 className="small-heading">🖥️ My Tech Stacks</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {techs.map(({ id, name, logo }) => (
                    <Badge key={id} name={name} logo={logo} />
                    ))}
                </div>
            </section>
                
            <section className="flex flex-col items-center gap-8 mt-5 mb-8">

                <div className="w-full max-w-4xl px-4">
                    <h2 className="small-heading">🏆 Awards & Certificates</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                    {awards_lists.map(item => (
                        <InfoCard key={item.id} title={item.title} description={item.description} />
                    ))}
                    </div>
                </div>

                <div className="w-full max-w-4xl px-4">
                    <h2 className="small-heading">🎓 Education</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                    {education_lists.map(item => (
                        <InfoCard key={item.id} title={item.title} description={item.description} range={item.range} />
                    ))}
                    </div>
                </div>

                <div className="w-full max-w-4xl px-4">
                    <h2 className="small-heading">💼 Work Experience</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                    {work_lists.map(item => (
                        <InfoCard key={item.id} title={item.title} description={item.description} range={item.range} />
                    ))}
                    </div>
                </div>
            </section>

        </div>    
    )
}