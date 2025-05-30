import Intro from '../components/intro';
import Form from '../components/form';

export default function Home() {
  return (
    <div>
      <h1 className="heading">Home</h1>
      <Intro/>
      <br/>

      <div className="small-heading">Connect with me</div>
      <div className="flex justify-center gap-5">
        <div>
          <a href="https://www.linkedin.com/in/aung-pyae-phyo9190/" target="_blank" >
            <svg className="link-hover" aria-label="LinkedIn logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
          </a> 
        </div>
        <div>
          <a href="https://www.facebook.com/share/1JSiUwzXRo/?mibextid=wwXIfr" target="_blank" >
          <svg className="link-hover" aria-label="Facebook logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
          </a>
        </div>
      </div>

      <br/>
      <Form/>
      <br/>
    </div>
  );
}
