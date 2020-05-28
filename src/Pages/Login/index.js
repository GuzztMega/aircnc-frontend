import React, { useState } from 'react';
import api from '../../services/api';

export default function Login(){

    const [email, setEmail] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('/sessions', { email })
        const { _id } = response.data;
    
        localStorage.setItem('user', _id);
    }

    return(
        <>
            <p>Offers <strong>spots</strong> for programmers and find <strong>talents</strong> for your business.</p>

            <form onSubmit={ handleSubmit }>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                id="email" 
                type="email" 
                placeholder="Your best email"
                value = {email}
                onChange={e => setEmail(e.target.value)} />

            <button className="btn" type="submit">Enter</button>
            </form>
        </>
    )
}