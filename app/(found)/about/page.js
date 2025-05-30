import Intro from '../../components/intro';
import {awards_lists, education_lists, work_lists, techs} from '../../lib/data';
import Badge from '../../components/badge';

export default function About() {
    return (
        <div>
            <h1 className="heading">About Me</h1>

            <Intro/>

            <section className="my-6">
                <h2 className="small-heading">My Tech Stacks</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {techs.map(({ id, name, logo }) => (
                    <Badge key={id} name={name} logo={logo} />
                    ))}
                </div>
            </section>
        </div>    
    )
}