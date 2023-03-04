import React, { useState, useEffect } from "react";
import './style.css'
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const initialQuote = {
    text: '',
    author: ''
}

export function App() {
    const [quote, setQuote] = useState(initialQuote)
    const [loading, setLoading] = useState(true)

    const obtenerDato = async () => {
        setLoading(true)
        const url= "https://api.breakingbadquotes.xyz/v1/quotes"
        const res=await fetch(url)
        const [data] = await res.json()
        //console.log(data)
        setQuote({
            text: data.quote,
            author: data.author
        })
        setLoading(false)
    }

    useEffect(() => {
        obtenerDato()
    },[])


    
    return (
        <div className="app">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
                alt="logo"
            />
            <button onClick={obtenerDato}>Next</button>
            {loading? <Spinner/>: <Quote text={quote.text} author={quote.author}/>}
            
        </div>

    )
}