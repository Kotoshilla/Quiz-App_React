import React, { Component }  from "react";

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

import './Quiz.css'

class Quiz extends Component {

    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {  
                question: 'Кто косячник?',
                rightAnswer: 5451,
                id: 34254,
                answers: [
                {text: 'Андрей', id: 541},
                {text: 'Кто?', id: 5451},
                {text: 'Ты', id: 51},
                {text: 'Я', id: 41},
            ]},
            {  
                question: 'А кто виноват?',
                rightAnswer: 54451,
                id: 354,
                answers: [
                {text: 'Тоже Андрей', id: 5451},
                {text: 'Точно не я', id: 54451},
                {text: 'Ты', id: 518},
                {text: 'Собака', id: 81},
            ]},
        ]
    }

    onAnswer = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswer === answerId) {

            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })
            const timeout = window.setTimeout(() => {
                window.clearTimeout(timeout)
                    if (this.isQuizFinished()) {
                        this.setState({
                            isFinished: true
                        })
                    console.log('finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
            }, 500)         
        } else {
            results[question.id] = 'fail'
            this.setState({
                answerState: {[answerId]: 'fail'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onRetry = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Quiz</h1>
                    { this.state.isFinished ? 
                      <FinishedQuiz results={this.state.results}
                                    quiz={this.state.quiz}
                                    onRetry={this.onRetry}/> : 
                      <ActiveQuiz question={this.state.quiz[this.state.activeQuestion].question}
                                  answers={this.state.quiz[this.state.activeQuestion].answers}
                                  onAnswer={this.onAnswer}
                                  quizLength={this.state.quiz.length}
                                  answerNumber={this.state.activeQuestion + 1}
                                  state={this.state.answerState}/>}
                </div>
            </div>
        )
    }
}


export default Quiz