import React,{useState,useEffect} from'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


function MyTodoHooksComponent()
{

    // function = hook, they are the same.
    let [task,setTask] = useState('');
    let [pendingTaskList,setPendingTaskList] = useState([]);

    function handleChange(event)
    {
        setTask(event.target.value);
    }

    function addItemToTask()
    {
        let pendingTaskListCopy = pendingTaskList;

        let taskObject = {
            description : task,
            status : 'pending'
        };

        pendingTaskListCopy.push(taskObject);
        setPendingTaskList(pendingTaskListCopy);
        setTask('');
        console.log(pendingTaskList);
    }


    function markDone(description)
    {   
        let pendingTaskListCopy = pendingTaskList;

        for(let i =0;i<pendingTaskListCopy.length;i++)
        {
            if(pendingTaskListCopy[i].description==description)
            {
                pendingTaskListCopy[i].status = 'done';
            }
        }
        
        setPendingTaskList(pendingTaskListCopy);
        // setTask('');
        console.log(pendingTaskList);
    }
        
    return ( 
    
    <Container>

        <h2>Todo Form</h2>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Task</Form.Label>
            <Form.Control type="text" placeholder="Enter Task" value={task} onChange={handleChange} />
            <Form.Text className="text-muted">
            Try to enter the task which you need to complete
            </Form.Text>
        </Form.Group>

        <Button variant="primary" type="button" onClick={addItemToTask} >
            Add to Task
        </Button>
        </Form>

        { pendingTaskList.length>0 ?<h2> Pending Tasks So far </h2>:<h2> No pending tasks</h2> }
        <ul>
            {  pendingTaskList.map((task)=>
                task.status =='pending'?(<li>{task.description}
                <Button onClick={()=>markDone(task.description)}> done </Button>
                </li>):null
            )}

            {  pendingTaskList.map((task)=>
                task.status =='done'?(
                    
                <li>
                    <h2>Completed Tasks</h2>
                    {task.description}
                <Button onClick={()=>markDone(task.description)}> done </Button>
                </li>):null
            )}
        </ul>
        
    </Container>);

}

export default MyTodoHooksComponent;