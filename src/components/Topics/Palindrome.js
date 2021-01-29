import React, { Component } from 'react';

export default class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    //split() divides string into ordered list of substrings -> puts in array according to pattern parameter ///& returns array. Empty string param splits each char.
    //reverse() reverses an array

    palindromeCheck(userInput) {
        let str_array = userInput.split("");
        let output = str_array.reverse().join("");
        if (userInput === output) {
            this.setState({ palindrome: 'true' })
        } else {
            this.setState({ palindrome: 'false' })
        }
    }


    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} ></input>
                <button className="confirmationButton" onClick={() => this.palindromeCheck(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div >
        )
    }
}
