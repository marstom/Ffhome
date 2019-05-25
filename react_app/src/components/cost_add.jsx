import React from 'react';
import './components.css'
import axios from "axios"

export default class CostAdd extends React.Component {
    constructor() {
        super()
        this.state = {
            'categories': [],
            'dates': []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/')
        .then(response => {
            return response.data
        })
        .then(data => {
            console.log(data)
            axios.get(data['categories'])
            .then(response => {
                return response.data
            })
            .then(data => {
                console.log(data)
                this.createOptions(data)
                
            })
            axios.get(data['dates'])
            .then(response => {
                return response.data
            })
            .then(data => {
                console.log(data)
                this.createDates(data)
                
            })
            
        })
    }
    
    createOptions(data) {
        let categories = []
        data.forEach(el => {
            categories.push(
                <option value={el.pk}>{el.name}</option>
                )
                
            })
            this.setState({
                categories
            })
        }
        
        createDates(data) {
            let dates = []
            data.forEach(el => {
                dates.push(
                    <option value={el.pk}>{el.date}</option>
                    )
                    
                })
                this.setState({
                    dates
                })
            }
            
            handleSubmit(event) {
                event.preventDefault()
                const dat = new FormData(event.target)
                console.log(dat)
                dat.forEach((a, b) => {
                    console.log("data: ", a, b)
                })
                axios.post("http://localhost:8000/api/v1/costs/", dat)
            }
            
            render() {
                return (
                    <div className="container" onSubmit={this.handleSubmit}>
                    <form className="form_add_cost">
                    <div className="form-gorup">
                    <label htmlFor="nameInput">Nazwa:</label>
                    <input autoComplete="off" className="form-control" type="text" name="name" id="nameInput"/>
                    </div>
                    <div className="form-gorup">
                    <label htmlFor="costInput">Cena:</label>
                    <input autoComplete="off" className="form-control" type="text" name="value" id="costInput"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="cat">Kategoria</label>
                    <select className="form-control" name="category" id="category">
                    <option value="-">-</option>
                    <option value="5">default</option>
                    {this.state.categories}
                    </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="cat">Data</label>
                    <select className="form-control" name="date" id="date">
                    <option value="-">-</option>
                    {this.state.dates}
                    </select>
                    </div>
                    <button className="btn btn-primary" type="submit">Dodaj</button>
                    
                    
                    </form>
                    </div>
                    )
                    
                }
            }
            