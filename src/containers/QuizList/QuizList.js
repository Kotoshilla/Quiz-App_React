import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import './QuizList.css'

class QuizList extends Component{

    renderQuizList() {
        return [1,2,3].map((quiz, i) => {
            return (
                <li key={i}>
                    <NavLink to={'/quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="QuizList">
                <div>
                    <h2>Список тестов</h2>
                    <ul>
                        { this.renderQuizList() }
                    </ul>
                </div>
            </div>
        )
    }
}


export default QuizList