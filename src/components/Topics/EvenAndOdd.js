import React, { Component } from 'react';

/*The problem summary:</b> Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers. */


export default class EvenAndOdd extends Component {
    constructor() {  //To hold state (object)
        super(); //Allows us to set state

        this.state = {   //an object
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    assignEvenAndOdds(userInput) {
        let evenArr = [];
        let oddArr = [];
        let inputStr = userInput;
        let inputArr = [];

        inputArr.push(userInput)
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i] % 2 === 0) {
                evenArr.push(i)
            }
            else {
                oddArr.push(i)
            }
        }
    }


    render() {
        return (
            <div className="puzzleBox evenAndOddPB" >
                <h4>Evens and Odds</h4>  //JSX notation for UI rendering
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
                < button className="confirmationButton" onClick={() => { this.assignEvenAndOdds(this.state.userInput) }} >Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}
