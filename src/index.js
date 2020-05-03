import React from 'react';
import ReactDOM from 'react-dom';

let element = <div>
<Welcome name="Siddarth" />
<Welcome name="Chirag" />
<Welcome name="Saideep" />
<Welcome name="Manasvi" />
<Welcome name="Rashida" />
</div>;

function Welcome(props)
{
    return <h1>Welcome {props.name}</h1>;
}

ReactDOM.render(element
            ,document.getElementById('root'));