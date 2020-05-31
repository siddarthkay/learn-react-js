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
    let [isLoaded, setIsLoaded] = useState(false);
    let [error, setError] = useState(null);


    // let numbers = [2,3,4]; 

    // function add(...numbers)
    // {
    //     arguments
    //     return num1+num2+num3;
    // }

     // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    //componentdidmount + componentdidupdate
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            console.log(result);
             let allTasks = [...pendingTaskList,...result];
             // put 200 tasks to my local variable existingTaskList

            //  result.map((task)=>{
            //     pendingtaskListCopy.push(task);
            //  });
             
             setPendingTaskList(allTasks);

            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
        // cleanup   
        return ()=>{
            console.log("garbage collection activity");
        }
    },[]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
      }

    function handleChange(event)
    {
        setTask(event.target.value);
    }

    function addItemToTask()
    {
        let pendingTaskListCopy = pendingTaskList;

        let taskObject = {
            title : task,
            completed : false
        };

        pendingTaskListCopy.push(taskObject);
        setPendingTaskList(pendingTaskListCopy);
        setTask('');
        console.log(pendingTaskList);
    }


    function markDone(title)
    {   
        let pendingTaskListCopy = [...pendingTaskList];

        for(let i =0;i<pendingTaskListCopy.length;i++)
        {
            if(pendingTaskListCopy[i].title==title)
            {
                pendingTaskListCopy[i].completed = true;
            }
        }
        
        setPendingTaskList(pendingTaskListCopy);
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
                task.completed==false?
            <li>{task.id} | {task.title}
                    <Button onClick={()=>markDone(task.title)}> done </Button>
                </li>
                :null
            )}
        </ul>
        
    </Container>);

}


export default MyTodoHooksComponent;