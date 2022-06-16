import React, {Component} from "react";

class ErrorBoundry extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError){
            return <h1>Ooops. Something wrong happen.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;