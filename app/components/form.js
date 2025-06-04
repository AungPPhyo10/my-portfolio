'use client';

import {useState, useTransition} from 'react';
import subscribeEmail from '../lib/api';

export default function Form() {
    const [message, setMessage] = useState("");
    const [ongoing, startTransition] = useTransition();

    function submitForm(data) {
        const name = data.get('name');
        const email = data.get('email');

        startTransition(() => {
            let msg;

            subscribeEmail({name, email})
            .then((json) => {
                const errMsg = json.ErrorMessage;
                
                if (errMsg && errMsg.includes('Email already exists')) {
                    msg = "You have already subscribed"
                } else if (errMsg && errMsg.includes('Invalid email address')) {
                    msg = "Please use a valid email format"
                } else {
                    msg = "Successfully Subscribed!"
                }

                setMessage(msg);
            })
            .catch(error => {
                alert('Error! Please try again later');
                console.log(error);
            })
        })
    }

    return (
    <form action={submitForm} className="p-8 m-5 rounded-xl border border-primary shadow-xl backdrop-blur-md bg-base-200 max-w-md mx-auto flex flex-col gap-4 ">
        <div className="text-center">
            <h1 className="text-2xl font-bold">Join my e-mail list</h1>
            <p className="text-sm opacity-70 mt-1">
            Stay updated with my latest projects, insights, and development tips. No spam - just cool stuff.
            </p>
        </div>

        <div className="form-control">
            <label htmlFor="name" className="label">
            <span className="label-text me-2">Name</span>
            </label>
            <input type="text" id="name" name="name" className="input input-bordered" required/>
        </div>

        <div className="form-control">
            <label htmlFor="email" className="label">
            <span className="label-text me-3">Email</span>
            </label>
            <input type="email" id="email" name="email" className="input input-bordered" required/>
        </div>
        
        <div className="flex justify-center">
            <button type="submit" className="btn btn-primary disabled:bg-slate-100 disabled:text-slate-500" disabled={ongoing}>
                {ongoing ? <span className="flex justify-center items-center"><span className="loading loading-spinner loading-lg me-2"></span>Submitting...</span> : 'Submit'}
            </button>
        </div>

        {message ? <div role="alert" className="alert alert-soft justify-center">{message}</div> : <></>}
    
    </form>

    )
}