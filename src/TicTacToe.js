import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basic.css';
import {Container,Row,Form,Col,Button} from 'react-bootstrap'

function TicTacToe()
{

    let [player1,setPlayer1]= useState('');
    let [player2,setPlayer2]= useState('');
    let [begin,setBegin]=useState(false);
    let [turn,setTurn]=useState(1);
    let [turnValue,setTurnValue]=useState('');
    let [numberOfTurns,setNumberOfTurns]=useState(0);


    function handlePlayer1Change(event)
    {
        setPlayer1(event.target.value);
    }

    function handlePlayer2Change(event)
    {
        setPlayer2(event.target.value);
    }

    function initiateGame()
    {
        setBegin(true);
    }

    function freezePlayerChoice()
    {
        setTurn(2);
    }

    useEffect(()=>{
        if(turn==1)
        {
            setTurnValue('X');
        }
        else
        {
            setTurnValue('O');
        }
    },[]);
    

    return (
  
        <Container>
            <Row className="justify-content-md-center">
                    <h1 className='headingStyle'>Lets play Tic Tac Toe</h1>
            </Row>
            <Row>
                2 player game.
                both players enter their names and click the begin button.
                Once the button is pressed, you show a 3*3 matrix( similar to X and 0)
                Player 1 gets X.
                Player 2 gets 0.
                it begins with player 1 
                Player 1 can decide where to put the X and then select confirm.
                Then the turn goes to player 2.
                Player 2 can do the same.
                The game will check for 3 consecutive X's or 0's, whoever makes the first strike wins.
                Game is either a win or a draw.
                Game announces winner at the end.
            </Row>

            <Form>
                <h1 className='subHeadingStyle'>Enter player information to start</h1>
                <Row>
                    <Col>
                        <Form.Control placeholder="Player 1" onChange={handlePlayer1Change} value={player1}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Player 2"  onChange={handlePlayer2Change} value={player2}/>
                    </Col>
                </Row>
                <Row className="buttonsArea">
                    <Button variant="outline-success" onClick={initiateGame}>Begin!</Button>
                    <Button variant="outline-danger" className="reset-btn">Reset!</Button>
                </Row>
            </Form>

            {begin==true?
                <div>
                    Player 1 = {player1} and will be using X <br />
                    Player 2 = {player2} and will be using 0s <br />

                    Its {turn==1?player1:player2}'s turn now!

                    <div className="boardArea">
                        <Row>
                            <Col>
                                <table border="1px">
                                    <tbody>
                                        <tr>
                                            <Box boxValue={turn==1?"X":"O"} />
                                            <Box boxValue={turn==1?"X":"O"} />
                                            <Box boxValue={turn==1?"X":"O"} />
                                        </tr>
                                        <tr>
                                            <Box boxValue={turn==1?"X":"O"} />
                                            <Box boxValue={turn==1?"X":"O"} />
                                            <Box boxValue={turn==1?"X":"O"} />
                                        </tr>
                                        <tr>
                                            <Box boxValue={turn==1?"X":"O"}/>
                                            <Box boxValue={turn==1?"X":"O"} />
                                            <Box boxValue={turn==1?"X":"O"} />
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                            <Col><Button variant="outline-success" onClick={freezePlayerChoice}>Freeze!</Button></Col>
                        </Row>
                        
                        
                    </div>
                    

                </div>
            :null}

        </Container>
        
    );
}

function Box(props)
{
    let [display,setDisplay] = useState(false);

    function boxClick()
    {
        setDisplay(true);
    }

    return (
        <td><button className="boxbutton" onClick={boxClick}> {display?props.boxValue:null}</button></td>
    );
}

const styles = {
   
}

export default TicTacToe;