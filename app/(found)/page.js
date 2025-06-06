import Intro from '../components/intro';
import Form from '../components/form';
import ScrollAnimate from '../components/scrollAnimate';

export default function Home() {
  return (
    <div>
      <h1 className="heading animate__animated animate__fadeInUp">Home</h1>
      <Intro/>
      <br/>

      <div className="animate__animated animate__fadeInUp">
        <div className="small-heading mb-4">Connect with me</div>
        <div className="flex justify-center gap-5 flex-wrap">
          <a href="https://www.linkedin.com/in/aung-pyae-phyo9190/" target="_blank"
            className="btn btn-circle bg-base-200 hover:bg-primary/20 transition-all border border-base-300 shadow-md"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" fill="currentColor" className="text-primary" viewBox="0 0 32 32">
              <path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" />
            </svg>
          </a>

          <a href="https://www.facebook.com/share/1JSiUwzXRo/?mibextid=wwXIfr" target="_blank"
            className="btn btn-circle bg-base-200 hover:bg-primary/20 transition-all border border-base-300 shadow-md"
            aria-label="Facebook"
          >
            <svg width="24" height="24" fill="currentColor" className="text-primary" viewBox="0 0 32 32">
              <path d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z" />
            </svg>
          </a>
        </div>
      </div>
      <br/>

      <ScrollAnimate>
        <Form/>
      </ScrollAnimate>   
      <br/>

    </div>
  );
}
