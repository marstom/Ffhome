/*
* Costs: {"pk":3,"category":7,"date":1,"name":"Koza","value":"12.22"}
*
* */
import React from 'react';
import { CostsTable } from './components/cost_table'
import CostAdd from './components/cost_add'
import Home from './components/home'
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import styles from './App.css';

function HomeView(){
    return (
        <div>
            Welcome to expenses app
            <Home/>
        </div>
    )
}

function CostTableView() {
    return(
        <div className="costsDiv"><CostsTable className="costsTable"/></div>
    )
}

function CostAddView() {
    return (
        <div><CostAdd/></div>
    )

}

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <NavLink className="link" to="/">Home</NavLink>
                    <NavLink className="link" to="/costs">Costs</NavLink>
                    <NavLink className="link" to="/costsadd">Cost add</NavLink>
                </header>


                <Route exact path="/" component={HomeView}/>
                <Route path="/costs" component={CostTableView}/>
                <Route path="/costsadd" component={CostAddView}/>
            </Router>
        </div>
    );
}

export default App;
