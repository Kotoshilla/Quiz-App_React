
import AnswersList from './AnswersList/AnswersList'

import './ActiveQuiz.css'


const ActiveQuiz = props => {
    return (
        <div className='ActiveQuiz'>
            <p className='ActiveQuizQuestion'>
                <span className='Question'>
                    <strong>{`${props.answerNumber}. `}</strong>
                    {props.question}
                </span>
                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>

            <AnswersList answers={props.answers}
                         onAnswer={props.onAnswer}
                         state={props.state}/>


        </div>
    )
}

export default ActiveQuiz