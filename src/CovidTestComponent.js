import React from 'react';

class CovidTestComponent extends React.Component 
{

    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            email:'',
            locality:'',
            age:'',
            id:'',
            itemCount:0,
            trackerList:[]
        }
    };

    handleInputChange(event)
    {
        this.setState({name:event.target.value});
    }

    handleEmailChange(event)
    {
        this.setState({email:event.target.value});
    }

    handleLocalityChange(event)
    {
        this.setState({locality:event.target.value});
    }

    handleAgeChange(event)
    {
        let inputAge = event.target.value;
        if(inputAge<0 || inputAge>120)
        {
            alert("Age must only be between 0 and 120!!");
        }
        else
        {
            this.setState({age:inputAge});
        }
        
    }

    handleInputChange(event)
    {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        if(name=="age")
        {
            if(value<0 || value>120)
            {
                alert("Age must only be between 0 and 120!!");
            }
        }

        this.setState({
            [name]: value
          });

    }

    storeInformationToState()
    {

        let existingList = this.state.trackerList;

        if(this.state.editMode)
        {
            existingList.map(row=>{
                if(row.id == this.state.id)
                {
                    row.name = this.state.name;
                    row.email = this.state.email;
                    row.locality = this.state.locality;
                    row.age = this.state.age;
                }
            });

            this.setState({
                trackerList:existingList,
                name:'',
                email:'',
                age:'',
                locality:'',
                editMode:false});    

        }
        else
        {
            let row = {
                name:this.state.name,
                email:this.state.email,
                locality:this.state.locality,
                age:this.state.age,
                id:this.state.itemCount
            };
            
            
            existingList.push(row);
    
            this.setState({
                trackerList:existingList,
                name:'',
                email:'',
                age:'',
                locality:'',
                itemCount:this.state.itemCount+1
                });
        }
        
    }

    deleteRow(idToRemove)
    {
        if(this.state.editMode)
        {
            alert("pls wait for edit activity to be completed!");
        }
        else
        {
            let existingList = this.state.trackerList;
            existingList.splice(idToRemove,1);

            this.setState({
                trackerList:existingList,
                itemCount:this.state.itemCount-1

            });
        }
        
    }

    editRow(idToUpdate)
    {
        let existingList = this.state.trackerList;
        existingList.map(row=>{
            if(row.id == idToUpdate)
            {
                this.setState(
                    {
                        name:row.name,
                        email:row.email,
                        age:row.age,
                        locality:row.locality,
                        editMode:true,
                        id:row.id
                    }
                );
            }
        })
    }

    render(){
        return (
            <div className="container">
                <h1>Covid Tracker</h1>

                <input type="text" name="name" value={this.state.name} onChange={(event)=>this.handleInputChange(event)} />
                <input type="text" name="email" value={this.state.email} onChange={(event)=>this.handleInputChange(event)} />
                <input type="text" name="locality" value={this.state.locality} onChange={(event)=>this.handleInputChange(event)} />
                <input type="text" name="age" value={this.state.age} onChange={(event)=>this.handleInputChange(event)} />
                <button onClick={()=>this.storeInformationToState()}>Store</button>

                <h2>Store:</h2>

                <ul>
                    { this.state.trackerList.map(row => 
                        <li key={row.id}>{row.name},{row.email},{row.locality},{row.age} 
                            <button onClick={()=>this.editRow(row.id)}>Edit</button >
                            <button onClick={()=>this.deleteRow(row.id)}>Delete</button> 
                        </li>)
                    }
                </ul>
        

            </div>
        );
    };


}

export default CovidTestComponent;
