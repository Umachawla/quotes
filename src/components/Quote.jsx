import React, { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import { getData } from '../context/GlobalActions'

function Quote() {

    const { quote, dispatch } = useContext(GlobalContext)

    const handleClick = async () => {
        const data = await getData();
        dispatch({
            type: "GET_DATA",
            payload: data,
        });
    }

    useEffect(() => {
        setTimeout(()=>{
            handleClick()
        },5000)
    }, [])


    if (quote === null) {
        return (
            <div className="container p-5 loading">

                <div className="spinner-grow text-dark" role="status">
                </div>
            </div>
        )
    }



    return (
        <div className="container-fluid quote-bg">
            <div>
                <figure className="snip1533">
                    <figcaption>
                        <blockquote>
                            <p className="para">{quote.content}</p>
                        </blockquote>
                        <h3 className="author">{quote.author}</h3>
                        <h4>Google Inc.</h4>
                    </figcaption>
                </figure>
            </div>
            <button className="btn btn-primary" onClick={() => handleClick()}>Get more quotes</button>
        </div>
    )
}

export default Quote