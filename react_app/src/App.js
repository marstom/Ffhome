/*
* Costs: {"pk":3,"category":7,"date":1,"name":"Koza","value":"12.22"}
*
* */
import React from 'react';
import axios from 'axios';
import { CostsTable } from './components/cost_table'
import './App.css';



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>This is header</div>
            </header>
            <div><CostsTable/></div>
        </div>
    );
}

export default App;
