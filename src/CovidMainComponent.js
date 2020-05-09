import React from 'react';

class CovidMainComponent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            name:'',
            email:'',
            locality:'',
            age:'',
            id:'',
            trackerList:[],
            itemCount:0,
            editMode:false
            }

    }

    // handleNameChange(event)
    // {
    //     this.setState({name:event.target.value});
    // }

    // handleEmailChange(event)
    // {
    //     this.setState({email:event.target.value});
    // }

    // handleLocalityChange(event)
    // {
    //     this.setState({locality:event.target.value});
    // }

    // handleAgeChange(event)
    // {
    //     let inputAge = event.target.value;
    //     if(inputAge<0 || inputAge>120)
    //     {
    //         alert("only age between 0 and 120 are valid!!");
    //     }
    //     else
    //     {
    //         this.setState({age:inputAge});
    //     }
        
    // }

    handleChange(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        if(name=="age")
        {
            if(value<0||value>120)
            {
                alert("only age between 0 and 120 are valid!!");
            }
        }

        //shortcut code
        this.setState({
            [name]:value
        });

    }

    storeValues()
    {
        let existingList = this.state.trackerList;


        if(this.state.editMode==true)
        {
            //write logic to edit

            existingList.map((row)=>{
                if(row.id==this.state.id)
                {
                    row.name = this.state.name;
                    row.email = this.state.email;
                    row.age=this.state.age;
                    row.locality=this.state.locality;
                }
            })

            this.setState({
                trackerList:existingList,
                name:'',
                email:'',
                age:'',
                locality:'',
                editMode:false
            });
        }
        else
        {
            //write logic to add
            let row = {
                id:this.state.itemCount,
                name:this.state.name,
                email:this.state.email,
                locality:this.state.locality,
                age:this.state.age
            }
    
            existingList.push(row);
    
            this.setState(
                {
                    trackerList:existingList,
                    name:'',
                    email:'',
                    age:'',
                    locality:'',
                    itemCount: this.state.itemCount + 1 
                });

                // this.setState({name:''});
            // this.setState({email:''});
            // this.setState({age:''});
            // this.setState({locality:''});
        }
        

        

    }

    deleteRow(idToDelete)
    {
        if(this.state.editMode==true)
        {
            alert("please let editing get over before pressing delete!");
        }
        else
        {
            let existingList = this.state.trackerList;
            existingList.splice(idToDelete,1);

            this.setState(
                {
                    trackerList:existingList,
                    itemCount: this.state.itemCount - 1 

                }
            )
        }
    }

    EditRow(idToEdit)
    {
        this.state.trackerList.map((row)=>{
                if(row.id==idToEdit)
                {
                    this.setState({
                        name:row.name,
                        email:row.email,
                        age:row.age,
                        locality:row.locality,
                        id:row.id,
                        editMode:true
                    })
                }
        });
    }


    render()
    {
        return (
            <div>
                <h1>Covid Component</h1>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(event)=>this.handleChange(event)} />
                <input type="email" name="email" placeholder="email"  value={this.state.email} onChange={(event)=>this.handleChange(event)} />
                <input type="text" name="locality" placeholder="locality" value={this.state.locality} onChange={(event)=>this.handleChange(event)}  />
                <input type="number" name="age" placeholder="age"value={this.state.age} onChange={(event)=>this.handleChange(event)}  />
                <button onClick={()=>this.storeValues()}>Store</button>

                <h2>Stored Values are : </h2>
                <ul>
                {this.state.trackerList.map((row)=>
                  <li>{row.name},{row.email},{row.locality},{row.age}
                    <button onClick={()=>this.deleteRow(row.id)}>Delete</button>
                    <button onClick={()=>this.EditRow(row.id)}>Edit</button></li>  )}
                </ul>
                    
            </div>
        );
    }
}

export default CovidMainComponent;