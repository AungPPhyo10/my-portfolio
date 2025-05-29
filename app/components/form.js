'use client';

import {useState, useTransition} from 'react';
import Spinner from './spinner';
import subscribeEmail from '../lib/api';

export default function Form() {
    function submitForm() {
        console.log('Hi');
    }

    return (
    <form action={submitForm} className="p-8 m-5 rounded-xl border border-primary shadow-xl backdrop-blur-md bg-base-200 max-w-md mx-auto flex flex-col gap-4">
    <div className="text-center">
        <h1 className="text-3xl font-bold">Join my e-mail list</h1>
        <p className="text-sm opacity-70 mt-1">
        Stay updated with my latest projects, insights, and development tips. No spam - just cool stuff.
        </p>
    </div>

    <div className="form-control">
        <label htmlFor="name" className="label">
        <span className="label-text me-2">Name</span>
        </label>
        <input
        type="text"
        id="name"
        name="name"
        className="input input-bordered"
        required
        />
    </div>

    <div className="form-control">
        <label htmlFor="email" className="label">
        <span className="label-text me-3">Email</span>
        </label>
        <input
        type="email"
        id="email"
        name="email"
        className="input input-bordered"
        required
        />
    </div>
    
    <div className="flex justify-center">
        <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    
    </form>

    )
}