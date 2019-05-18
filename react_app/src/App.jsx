/*
* Costs: {"pk":3,"category":7,"date":1,"name":"Koza","value":"12.22"}
*
* */
import React from 'react';
import { CostsTable } from './components/cost_table'
import CostAdd from './components/cost_add'
import Home from './components/home'
import PlotComponent from './components/plot'
import BarPlotComponent from './components/bar_plot'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

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
        <div>
            <NavLink className="btn btn-light" to="/costs/add">Add cost</NavLink>
            <NavLink className="btn btn-light" to="/costs?remove=True">Remove Cost</NavLink>
            <Route path="/costs/add" component={CostAddView}/>
            <Route path="/costs/remove"/>
            <div className="costsDiv">
                <CostsTable className="costsTable"/>
            </div>
        </div>
    )
}

function CostAddView() {
    return (
        <div><CostAdd/></div>
    )

}

function CategoryAddView() {
    return (
        <div>Add category</div>
    )

}

function Plot() {
    return(
        <div><PlotComponent/></div>
    )
}

function BarPlot() {
    return(
        <div><BarPlotComponent/></div>
    )

}

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <NavLink className="link" to="/">Home</NavLink>
                    <NavLink className="link" to="/costs">Costs</NavLink>
                    <NavLink className="link" to="/categories">Categories</NavLink>
                    <NavLink className="link" to="/plot">Plot</NavLink>
                    <NavLink className="link" to="/barplot">Bar Plot</NavLink>
                </header>


                <Route exact path="/" component={HomeView}/>
                <Route path="/costs" component={CostTableView}/>
                <Route path="/categories" component={CategoryAddView}/>
                <Route path="/plot" component={Plot}/>
                <Route path="/barplot" component={BarPlot}/>
            </Router>
        </div>
    );
}

export default App;
