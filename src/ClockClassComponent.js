import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

class ClockClassComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        // this is my component's state, which i can use to update my UI
        this.state={
            date:new Date()
        }

        // state is immutable, meaning you can not do this : this.state.date = new Date(), you need to use setState()
    }

    // runs after render
    componentDidMount()
    {
        this.intervalId = setInterval(
            () => { this.ticktok() },1000);
    }

    // runs when component is lets say closed/destroyed or we go elsewhere, maybe to a new page....
    componentWillUnmount()
    {
        // good for garbage collection
        clearInterval(this.intervalId);
    }

    ticktok() {
        // whenever state is changed or updated , render() is called again...
        this.setState({
            date:new Date()
        });
    }

    //runs after constructor
    render(){
        return (      
                <div>
                    <Link to="/Crud">Link to go to Crud covid component</Link>
                    <h1>Hola! </h1>
                    <h3>Time now is {this.state.date.toLocaleTimeString()}</h3>
                </div>);
    }

}

export default ClockClassComponent;