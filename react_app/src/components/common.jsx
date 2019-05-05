import React from "react"
import loading from "../resources/loading.gif"

export class LoadingThenDisplay extends React.Component {
    constructor(props){
        super()
        this.state = {
            'data': props.data
        }
    }
    render() {
        let loaded = null
        if (this.props.data && this.props.data !== 'null'){
            loaded = (
                <div>
                    {this.props.data}
                </div>
                )
        }else{
            loaded = (
                <img src={loading} alt="" Style="width: 8%;"/>
            )
        }
        return loaded
    }
}