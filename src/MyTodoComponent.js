import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


class MyTodoComponent extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            pendingtaskList : [],
            completedTaskList:[],
            lastIndex:0,
            task:''
        }
        this.handleTaskTyping =this.handleTaskTyping.bind(this);
        this.addItemToTask =this.addItemToTask.bind(this);
        this.markDone =this.markDone.bind(this);
    
    }

    componentDidMount()
    {
        var formBody = {
            name : 'sid',
            email : 'sid@centilliontech.in'
        };
        fetch('https://jsonplaceholder.typicode.com/todos',{
            method:'POST',
            body:formBody})
        .then(response => response.json())
        .then(todoList => {
            // console.log("data received from api call ="+json)
            let existingTaskList = this.state.pendingtaskList;
            // put 200 tasks to my local variable existingTaskList
            todoList.map((task)=>{
                existingTaskList.push(task);
            });
            // push existingTaskList to state
            this.setState({pendingtaskList:existingTaskList,lastIndex:existingTaskList.length});
        }).
        catch(error =>console.log("there was an error "+error));
    }

    componentDidUpdate()
    {
        
    }
    

    handleTaskTyping(event)
    {
        console.log(event.target.value);
        this.setState({task:event.target.value});
    }

    markDone(task)
    {
        let pendingtaskListCopy = this.state.pendingtaskList;
        let completedTaskListCopy = this.state.completedTaskList;
        let lastIndexCopy = this.state.lastIndex;

        // remove from existing task list
        for(let i = 0;i<pendingtaskListCopy.length;i++)
        {
            if(pendingtaskListCopy[i].id == task.id)
            {
                pendingtaskListCopy.splice(i,1);
                break;
            }
        }
        

        // add to completed task list
        completedTaskListCopy.push(task);
        
        this.setState({
            completedTaskList: completedTaskListCopy,
            pendingtaskList : pendingtaskListCopy,
            lastIndex:lastIndexCopy-1
        });
    }

    addItemToTask()
    {

        let taskValue = this.state.task;
        let currentTaskList = this.state.pendingtaskList;
        let lastIndexCopy = this.state.lastIndex;
        let currentIndex = lastIndexCopy+1;

        let task = {
            "userId":6,
            "id":currentIndex,
            "title":taskValue,
            "completed":"false",
        }

        currentTaskList.push(task);

        this.setState({
            task:'',
            pendingtaskList : currentTaskList,
            lastIndex:currentIndex
        });
    }

    render()
    {
        return (
            <Container>

                <h2>Todo Form</h2>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Task</Form.Label>
                    <Form.Control type="text" placeholder="Enter Task" value={this.state.task} onChange={this.handleTaskTyping}  />
                    <Form.Text className="text-muted">
                    Try to enter the task which you need to complete
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="button" onClick={this.addItemToTask}>
                    Add to Task
                </Button>
                </Form>
                

                {/* <PendingListComponent data = {this.state.pendingtaskList} /> will complete later */}
                { this.state.pendingtaskList.length>0 ?<h2> Pending Tasks So far </h2>:<h2> No pending tasks</h2> }
                
                    <ul>
                        {  this.state.pendingtaskList.map((task)=>
                            <li>{task.id} | {task.title}
                            <button onClick={()=> this.markDone(task)}> done </button></li>
                        )}
                    </ul>
                {this.state.completedTaskList.length>0?<h2> Completed Tasks </h2>:null }    
                <ul>
                        {this.state.completedTaskList.map((task)=>
                            <li>{task.id} | {task.title}</li>
                        )}
                    </ul>
            </Container>
            );
    }    
}

//to finish later when converting class component to functional component.
class PendingListComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            heading :''
        }
    }

    componentDidMount()
    {
        if(this.props.data.length>0)
        {
            this.setState({heading:'Pending Tasks So far'})           
        }
        else
        {
            this.setState({heading:'No Pending Tasks'})            
        }

    }



    render()
    {
        return (
            <ul>
                {this.props.data.map((task)=>(
                <div>
                    <h2>{this.state.heading}</h2>
                    <li>{task}
                        <button onClick={()=> this.markDone(task)}> done </button>
                    </li>
                </div>))}
            </ul>
        );
    }

    
} 

export default MyTodoComponent;