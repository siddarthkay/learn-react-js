import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basic.css';
import {Container,Row,Form,Col,Button} from 'react-bootstrap'

function TicTacToe()
{

    let [player1,setPlayer1]= useState('');
    let [player2,setPlayer2]= useState('');
    let [begin,setBegin]=useState(false);
    let [numberOfTurns,setNumberOfTurns]=useState(0);

    let grid = ['-','-','-','-','-','-','-','-','-'];

    let resultSet = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ];

    let [matrix,setMatrix]=useState(grid);
    let [turn,setTurn]=useState(1);
    let [xPlacement,setXPlacement]=useState([]);
    let [oPlacement,setOPlacement]=useState([]);

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
        if(player1.length>0 && player2.length>0)
        setBegin(true);
        else
        alert("please enter both the player names before moving forward.");
    }

    function resetGame()
    {
        setBegin(false);
        setPlayer1('');
        setPlayer2('');
        setMatrix(grid);
    }

    function boxClick(position)
    {
        let matrixShadow = [...matrix];
        let xPlacementShadow = [...xPlacement];
        let oPlacementShadow = [...oPlacement];

        if(turn===1)
        {
            matrixShadow[position]='X';
            xPlacementShadow.push(position);
            setXPlacement(xPlacementShadow);
            setTurn(2);
        }
        else
        {
            matrixShadow[position]='O';
            oPlacementShadow.push(position);
            setOPlacement(oPlacementShadow);
            setTurn(1);
        }

        calculateResult();
        setNumberOfTurns(numberOfTurns+1);
        setMatrix(matrixShadow);
        
    }

    function UndoLastChoice()
    {
        // need to keep track of what happened last and revert it...
    }
    
    function calculateResult()
    {
        resultSet.forEach(solution => {
            if(xPlacement.includes(solution[0]) && 
               xPlacement.includes(solution[1]) &&
               xPlacement.includes(solution[2]))
               {
                   alert("Player 1 wins");
               }
            
        });
    }

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
                    {!begin?<Button variant="outline-success" onClick={initiateGame}>Begin!</Button>:null}
                    <Button variant="outline-danger" className="reset-btn" onClick={resetGame}>Reset!</Button>
                </Row>
            </Form>

            {begin===true?
                <div>
                    Player 1 = {player1} and will be using X <br />
                    Player 2 = {player2} and will be using 0s <br />

                    Its {turn===1?player1:player2}'s turn now! <br />

                    Number of turns so far  = {numberOfTurns} <br />

                    <a onClick={UndoLastChoice} href="#">Undo Last Turn</a>

                    <div className="boardArea">
                    <Row>
                        <Col>
                            <table border="1px">
                                <tbody>
                                    <tr>
                                        <td><button className="boxbutton" onClick={()=>boxClick(0)}> {matrix[0]} </button></td>
                                        <td><button className="boxbutton" onClick={()=>boxClick(1)}> {matrix[1]} </button></td>
                                        <td><button className="boxbutton" onClick={()=>boxClick(2)}> {matrix[2]} </button></td>
                                    </tr>
                                    <tr>
                                        <td><button className="boxbutton" onClick={()=>boxClick(3)}> {matrix[3]} </button></td>
                                        <td><button className="boxbutton" onClick={()=>boxClick(4)}> {matrix[4]} </button></td>
                                        <td><button className="boxbutton" onClick={()=>boxClick(5)}> {matrix[5]} </button></td>
                                    </tr>
                                    <tr>
                                        <td><button className="boxbutton" onClick={()=>boxClick(6)}> {matrix[6]} </button></td>
                                        <td><button className="boxbutton" onClick={()=>boxClick(7)}> {matrix[7]} </button></td>
                                        <td><button className="boxbutton" onClick={()=>boxClick(8)}> {matrix[8]} </button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    </div>                    
                </div>
            :null}

        </Container>
        
    );
}

export default TicTacToe;