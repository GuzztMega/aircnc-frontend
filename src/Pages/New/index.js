import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import api from '../../services/api';
import './styles.css';

export default function New({ history }){
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(e){
        e.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, { headers: { user_id }})

        history.push('/dashboard');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label id='thumbnail' 
                   style={{ backgroundImage: `url(${preview})`}}
                   className={thumbnail ? 'has-thumbnail' : ''} >
              
                <input type='file' onChange={e => setThumbnail(e.target.files[0])} />
                <img src={ camera } alt='Select image'/>

            </label>

            <label htmlFor='company'>COMPANY *</label>
            <input
                id='company'
                placeholder='Your company'
                value={ company }
                onChange={ e => setCompany(e.target.value)}
            />

            <label htmlFor='techs'>TECHNOLOGIES * <span>(separated by commas)</span></label>
            <input
                id='techs'
                placeholder='Which technologies are used?'
                value={ techs }
                onChange={ e => setTechs(e.target.value)}
            />

            <label htmlFor='price'>DAILY VALUE * <span>(blank for FREE)</span></label>
            <input
                id='price'
                placeholder='Amount charged per day'
                value={ price }
                onChange={ e => setPrice(e.target.value)}
            />

            <button type='submit' className='btn'>Register</button>

        </form>
    )
}