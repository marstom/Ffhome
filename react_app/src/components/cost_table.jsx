import React from "react"
import axios from "axios"

export class CostsTable extends React.Component {
    constructor() {
        super()
        this.state = {'data': []}
    }

    read_data = async () => {
        let axi = await axios.get('http://localhost:8000/api/v1/costs/')
        let data = await axi.data
        this.setState({
            data: data
        })
        return data
    }

    componentDidMount() {
        this.read_data()
    }

    create_list() {
        let data = []
        data = this.state.data
        let list = []
        data.forEach(el => {
            console.log(el)
            list.push(
                <tr key={el.pk}>
                    <td>{el.date}</td>
                    <td>{el.category}</td>
                    <td>{el.name}</td>
                    <td>{el.value}</td>
                    <td>X</td>
                </tr>)
        })
        return (
            <table>
                <thead>
                <tr>
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
                {/*<LoadingThenDisplay data={JSON.stringify(this.state.data)}/>*/}
                {list}
            </div>
        )
    }

}