import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export function HomePage() {
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)
    const handleStartShoping = (e) => {
        useEffect(() =>{
            fetch()
        }, [])
    }
    return(
        <div className="home-page__container">
            <h1 className="home-page__title">
                Welcome to <span>awersome</span> shop!!
            </h1>
            <p className="home-page__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, autem.
            </p>
            <button type="button" onClick={() => handleStartShoping()}> 
                <Link to='/catalog'>
                    Let's start 
                </Link>
            </button>
        </div>
    )
}