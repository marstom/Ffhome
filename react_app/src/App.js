import React from 'react';
import axios from 'axios';
import { LoadingThenDisplay } from './components/common'
import './App.css';

class CostsTable extends React.Component {
    constructor(){
        super()
        this.state = {'data': null}
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
        // axios.get('http://localhost:8000/api/v1/')
        //     .then(res => {
        //         const data = res.data
        //         this.setState({data})
        //     })
    }

    render(){
        let text = ''
        let data = this.state.data
        if(data){
            text = JSON.stringify(data)

        }
        console.log('after>>.', data)
        return(
            <div>
                <LoadingThenDisplay data={text}/>
            </div>
        )
    }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>This is header</div>
      </header>
        <div><CostsTable></CostsTable></div>
    </div>
  );
}

export default App;
