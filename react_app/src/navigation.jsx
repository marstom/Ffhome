import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function Home() {
    return(
        <div>
            Home
        </div>
    )

}

function About() {
    return(
        <div>
            About
        </div>
    )

}

function Navigation() {
    return (
        <div>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>


                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Router>

        </div>
    )
}

export default Navigation