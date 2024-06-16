import {quotes} from "./assets/quotes.js"
import { useState } from "react"

import "./App.css"

export function App (){

    const [state, updateOnClick] = useState(false)
    

    let randomNum = Math.floor(Math.random() * quotes.length)
    const color1 = Math.floor(Math.random() * 128)
    const color2 = Math.floor(Math.random() * 128)
    const color3 = Math.floor(Math.random() * 128)
    const randomColor = `rgb(${color1}, ${color2}, ${color3})`
    
    

    const handleClick = () => {
        updateOnClick(randomNum)
    }

    const {quote, author} = quotes[randomNum]



    return (
        <div className="background" style={{backgroundColor:randomColor, transitionDuration:"2s"}}>
            <div id="quote-box">
                <div className="content-box">
                    <p id="text" style={{color:randomColor}}>"{quote}"</p>
                </div>
                <h2 id="author" style={{color:randomColor}}>-{author}</h2>
                <div className="tw-tblr-quotes">
                    <a id="tweet-quote" style={{backgroundColor:randomColor, transitionDuration:"2s"}} title="Twitter button" href="twitter.com/intent/tweet">Tweet</a>
                    <a id="tumblr-quote" style={{backgroundColor:randomColor, transitionDuration:"2s"}} href="'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes">Tumblr</a>
                    <button id="new-quote" style={{backgroundColor:randomColor, transitionDuration:"2s"}} onClick={handleClick} >New Quote</button>
                </div>
            </div>
        </div>
    )
}