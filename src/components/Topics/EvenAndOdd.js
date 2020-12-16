import React, { Component } from 'react';

/*The problem summary:</b> Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers. */


export default class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
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
        let inputString = userInput //something else

        for (i = 0; i < arrInput.length; i++)
            if (i % 2 === 0) {
                evenArr.push(i)
            }
            else {
                oddArr.push(i)
            }
    }
}
    }

render() {
    return (
        <div className="puzzleBox evenAndOddPB" >
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
            < button className="confirmationButton" onClick={() => { this.assignEvenAndOdds(this.state.userInput) }} >Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
        </div>
    )
}
}
