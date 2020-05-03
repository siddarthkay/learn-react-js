import React from 'react';
import ReactDOM from 'react-dom';

class MyTodoComponent extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            pendingtaskList : [],
            completedTaskList:[],
            task:''
        }
        this.handleTaskTyping =this.handleTaskTyping.bind(this);
        this.addItemToTask =this.addItemToTask.bind(this);
        this.markDone =this.markDone.bind(this);
    
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

        // remove from existing task list
        for(let i =0;i<pendingtaskListCopy.length;i++)
        {
            if(pendingtaskListCopy[i]==task)
            {
                pendingtaskListCopy.splice(i,1);
                break;
            }
        }

        // add to completed task list
        completedTaskListCopy.push(task);
        
        this.setState({
            completedTaskList: completedTaskListCopy,
            pendingtaskList : pendingtaskListCopy
        });
    }

    addItemToTask()
    {

        let taskValue = this.state.task;
        let currentTaskList = this.state.pendingtaskList;

        currentTaskList.push(taskValue);

        this.setState({
            task:'',
            pendingtaskList : currentTaskList
        });
    }

    render()
    {
        return (
            <div>
                <h1>Hi I am MyTodoComponent</h1>
                <input type="text" value={this.state.task} onChange={this.handleTaskTyping} />
                <button onClick={this.addItemToTask}>Add to Task</button>
                <h2> Pending Tasks So far </h2>
                    <ul>
                        {this.state.pendingtaskList.map((task)=>
                            <li>{task}
                            <button onClick={()=> this.markDone(task)}> done </button></li>
                        )}
                    </ul>
                <h2> Completed Tasks </h2>
                <ul>
                        {this.state.completedTaskList.map((task)=>
                            <li>{task}
                            <button onClick={()=> this.markDone(task)}> done </button></li>
                        )}
                    </ul>
            </div>
            );
    }    
}

export default MyTodoComponent;