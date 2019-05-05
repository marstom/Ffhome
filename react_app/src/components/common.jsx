import React from "react"
import loading from "../resources/loading.gif"

export class LoadingThenDisplay extends React.Component {
    constructor(props){
        super()
        this.state = {
            'categories': props.categories
        }
    }
    render() {
        let loaded = null
        if (this.props.categories && this.props.categories !== 'null'){
            loaded = (
                <div>
                    {this.props.categories}
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