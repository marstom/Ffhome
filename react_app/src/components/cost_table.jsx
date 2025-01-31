import React from "react"
import axios from "axios"


const getParams = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(param);
    return myParam

}

export class CostsTable extends React.Component {
    constructor() {
        super()
        this.state = {
            'costs': [],
            'categories': [],
            'dates': [],
        }
    }

    read_data = async () => {
        let api_root = await axios.get('http://localhost:8000/api/v1/')
        let api_root_urls = await api_root.data


        let costs = await axios.get(api_root_urls['costs'])
        let costs_data = await costs.data

        let categories = await axios.get(api_root_urls['categories'])
        let categories_data = await categories.data

        let dates = await axios.get(api_root_urls['dates'])
        let dates_data = await dates.data



        this.setState({
            costs: costs_data,
            categories: categories_data,
            dates: dates_data
        })
        return categories_data
    }

    componentDidMount() {
        this.read_data()
    }

    removeEl = (el) =>{
        const pk = el.target.value
        axios.delete(`http://localhost:8000/api/v1/costs/${pk}`)
            .then(response =>{
                console.log(response)
                this.read_data()
            })
    }

    create_list() {
        let data = []
        data = this.state.costs
        let list = []
        let remove = getParams('remove')
        data.forEach(el => {

            let category = this.state.categories.find(cat => {
                return cat.pk === el.category
            })

            let cat_name = '-'
            if (category){
                cat_name = category.name
            }

            let dates = this.state.dates.find(dat => {
                return dat.pk === el.date
            })

            let date_str = '-'
            if(dates){
                date_str = dates.date
            }

            if(remove){
                list.push(
                    <tr key={el.pk}>
                        <td>{date_str}</td>
                        <td>{cat_name}</td>
                        <td>{el.name}</td>
                        <td>{el.value}</td>
                        <td><button
                            className="btn-sm btn-link"
                            value={el.pk}
                            onClick={this.removeEl}
                        >X</button></td>
                    </tr>)

            }else{
                list.push(
                    <tr key={el.pk}>
                        <td>{date_str}</td>
                        <td>{cat_name}</td>
                        <td>{el.name}</td>
                        <td>{el.value}</td>
                        <td></td>
                    </tr>)
            }
        })
        return (
            <table>
                <thead>
                <tr key="header">
                    <th>Date</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Action</th>

                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
        )


    }

    render() {
        let list = this.create_list()

        return (
            <div>
                <div>
                    {list}
                </div>

            </div>
        )
    }

}