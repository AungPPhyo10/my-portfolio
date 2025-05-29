'use server';       // for jsx functions that will do API requests  

const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

export default async function subscribeEmail({name, email}) {
    const url = 'https://api.mailjet.com/v3/REST/contact';
    const body = JSON.stringify({name, email, isExcludedFromCampaigns: true})
    const headers = {
        'Content-type' : 'application/json',
        'Authrorization' : `Basic ${Buffer.from(apiKey+":"+secretKey).toString('base64')}`
    }
    // encrypt the authorization key by using buffer method

    const res = await fetch(url, {method: 'POST', headers, body});
    const json = await res.json();

    return json;
    
}